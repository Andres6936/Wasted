import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const documents = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const responseCount = await supabase.from("Quotes")
    .select("*", { count: "exact" })
    .eq("Process", documents.Process)
    .select();

  if (responseCount.count === 1) {
    // TODO: Add
  } else {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 403,
      body: 'Process not found'
    });
  }
}