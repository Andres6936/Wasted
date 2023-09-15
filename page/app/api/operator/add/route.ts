import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const operator = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.from('Operator').insert({
    'Name': operator.Name,
    'NumberPhone': operator.NumberPhone
  }).select();

  if (response.data?.length == 1) {
    const [register] = response.data
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 200,
      body: register
    });
  }

  return NextResponse.json({
    isBase64Encoded: false,
    statusCode: 403,
    body: 'Cannot insert register in table'
  });
}