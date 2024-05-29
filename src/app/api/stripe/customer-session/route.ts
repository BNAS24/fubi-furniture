// @desc Create a customer session with stripe
// @route api/stripe/customer-session
// @access Public

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const customerSession = await stripe.customerSessions.create({
      customer: "cus_QBsqM66Ee10srN",
      components: {
        buy_button: {
          enabled: true,
        },
      },
    });

    return NextResponse.json({ client_secret: customerSession.client_secret });
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
