// app/api/images/route.ts
import dbConnect from "@/app/lib/dbConnect";
import Test from "@/app/models/Test";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("trying to fetch..");
  try {
    await dbConnect();
    const products = await Test.find();
    console.log("products", products);
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
