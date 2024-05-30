// @desc Create a customer session with stripe
// @route api/stripe/customer-session
// @access Public

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const cartItems = [
      {
        name: "Lava Lamp",
        productId: "prod_QC1nP288ob5WhN",
        priceId: "price_1PLdk60201ag0YUEotwz0GKY",
        quantity: 2,
      },
      {
        name: "Lamp",
        productId: "prod_QC1nP288ob5WhN",
        priceId: "price_1PJYyJ0201ag0YUEGU3xUVCw", 
        quantity: 1,
      },
    ];

    const line_items = cartItems.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
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
