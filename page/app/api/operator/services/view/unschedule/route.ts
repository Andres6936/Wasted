import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ServiceStates } from "@/app/states/ServiceStates";

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.from('Services')
    .select('*')
    .eq("State", ServiceStates.UNSCHEDULED)

  return NextResponse.json({
    isBase64Encoded: false,
    statusCode: 200,
    body: response.data
  });
}