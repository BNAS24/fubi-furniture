import dbConnect from "@/app/_lib/dbConnect";
import Test from "@/app/_models/Test";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("trying to fetch..");

  await dbConnect();

  try {
    const products = await Test.find();

    console.log("products from product route", products);

    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
