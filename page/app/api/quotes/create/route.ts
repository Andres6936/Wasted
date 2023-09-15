import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const create = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.from("").insert({
    "Name": create.Name,
    "Email": create.Email,
    "NumberPhone": create.NumberPhone,
    "Address": create.Address,
    "Observation": create.Observation,
    "Value": create.Value,
    // Is needed to validate the body with the defined in the enum
    "Plan": PlanType[create.Plan].name
  }).select()

  if (response.data?.length == 1) {
    const [register] = response.data
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 200,
      body: register['Process']
    });
  }

  return NextResponse.json({
    isBase64Encoded: false,
    statusCode: 403,
    body: response
  });
}