import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.auth.signUp({
    email: body.email,
    password: body.password
  });

  return NextResponse.json({
    isBase64Encoded: false,
    statusCode: 200,
    body: response
  });
}