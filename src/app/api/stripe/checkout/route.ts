// @desc Create a customer session with stripe
// @route api/stripe/customer-session
// @access Public
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  
  try {

    const { products } = await request.json();

    console.log("products: ", products);

    const line_items = products.map((item: any) => ({
      price: item.stripe_price_link,
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout-canceled`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.log("error: ", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
