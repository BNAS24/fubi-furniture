// @desc Get list of all prices on stripe account
// @route api/stripe/prices
// @access Public

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const prices = await stripe.prices.list({
      limit: 10,
    });
    console.log(prices);
    
    return NextResponse.json(prices.data);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
