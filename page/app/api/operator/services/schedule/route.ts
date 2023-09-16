import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ServiceStates } from "@/app/states/ServiceStates";

export async function POST(request: Request) {
  const schedule = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const responseExistService = await supabase.from("Services")
    .select("*", {
      count: "exact"
    })
    .eq("Process", schedule.Service)
    .eq("State", ServiceStates.UNSCHEDULED);

  const responseExistSchedule = await supabase.from("Schedule")
    .select("*", {
      count: "exact"
    })
    .eq("Service", schedule.Service);

  if (responseExistSchedule.count === null || responseExistService.count === null) {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 503,
      body: 'Error in the request'
    });
  }

  if (responseExistSchedule.count >= 1) {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 201,
      body: `The service ${schedule.Service} has been already schedule for the date ${schedule.At}`
    });
  }

  if (responseExistService.count === 1) {
    const response = await supabase.from("Schedule")
      .insert({
        "Service": schedule.Service,
        "At": schedule.At,
        "Operator": schedule.Operator,
        "Manifest": schedule.Manifest
      })
      .select();

    if (response.data?.length === 1) {
      // TODO
      return NextResponse.json({
        isBase64Encoded: false,
        statusCode: 200,
        body: schedule
      });
    } else {
      return NextResponse.json({
        isBase64Encoded: false,
        statusCode: 403,
        body: "Cannot insert register in schedule"
      });
    }
  } else {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 404,
      body: 'Service not exist'
    });
  }
}