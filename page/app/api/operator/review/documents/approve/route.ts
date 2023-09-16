import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { QuoteStates } from "@/app/states/QuoteStates";

export async function POST(request: Request) {
  const process = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.from("Quotes")
    .update({
      "State": QuoteStates.PENDING_PAY
    })
    .eq("Process", process.Process)
    .select();

  if (response.data?.length === 1) {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 200,
      body: 'Successful'
    });
  } else {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 403,
      body: 'Cannot update the state of Quote'
    });
  }
}