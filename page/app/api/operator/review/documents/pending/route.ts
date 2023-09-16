import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { QuoteStates } from "@/app/states/QuoteStates";

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.from('Quotes')
    .select('*').eq("State", QuoteStates.PENDING_DOCUMENTS)

  if (!response.data) {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 503,
      body: 'The response of service is null'
    });
  }

  for (const review of response.data) {
    const responseDocuments = await supabase.from('Documents')
      .select('*')
      .eq("Process", review['Process'])
    review['Documents'] = responseDocuments.data
  }

  return NextResponse.json({
    isBase64Encoded: false,
    statusCode: 200,
    body: response.data
  });
}