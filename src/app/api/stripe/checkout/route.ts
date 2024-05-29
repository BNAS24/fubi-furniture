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
        name: "T-shirt",
        price: 2000, // $20.00 in cents
        quantity: 2,
      },
      {
        name: "Mug",
        price: 1500, // $15.00 in cents
        quantity: 1,
      },
    ];

    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.log("error: ", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};