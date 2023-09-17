import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { v4 as uuid4 } from 'uuid';

export async function POST(request: Request) {
  const documents = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  const responseCount = await supabase.from("Quotes")
    .select("*", { count: "exact" })
    .eq("Process", documents.Process)
    .select();

  if (responseCount.count === 1) {
    for (let document of documents.Documents) {
      const path = uuid4() + '.' + document.MIME
      const responseUpload = await supabase.storage.from('Documents')
        .upload( path, Buffer.from(document.Base64, 'base64'))
      if (responseUpload.error === null) {
        const responseInsert = await supabase.from('Documents')
          .insert({
            Process: documents.Process,
            Type: document.Type,
            URL: path,
          })
        if (responseInsert.status != 201) {
          return NextResponse.json({
            isBase64Encoded: false,
            statusCode: 403,
            body: 'Document not register in database'
          });
        }
      } else {
        return NextResponse.json({
          isBase64Encoded: false,
          statusCode: 403,
          body: 'Document cannot upload to storage'
        });
      }
    }

    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 200,
      body: 'Successful'
    });
  } else {
    return NextResponse.json({
      isBase64Encoded: false,
      statusCode: 403,
      body: 'Process not found'
    });
  }
}