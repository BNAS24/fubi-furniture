// app/api/images/route.ts
import { list } from "@vercel/blob";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");

    console.log("params:", category);
    console.log("nextRequest:", NextRequest);

    const { blobs } = await list({
      prefix: `Furniture/${category}`!
    });

    console.log("blobs:", blobs);

    return Response.json(blobs);
  } catch (error: any) {
    Response.json({ error: error.message });
  }
}
