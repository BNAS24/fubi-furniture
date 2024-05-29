// @desc Get list of all products on stripe account
// @route api/stripe/products
// @access Public

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const products = await stripe.products.list({
      limit: 10,
    });
    console.log(products);
    
    return NextResponse.json(products.data);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
