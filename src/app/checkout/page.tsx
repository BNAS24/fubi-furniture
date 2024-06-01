"use client";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import theme from "../_styles/muiTheme";
import { useCart } from "../_context/CartContext";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const { cartItems } = useCart();

  const handleCheckout = async (products: any[]) => {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/stripe/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      }
    );

    const { id } = await response.json();

    const stripe = await stripePromise;

    const { error } = await stripe!.redirectToCheckout({
      sessionId: id,
    });

    if (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.contrastText,
      }}
    >
      <div>
        <h1>Checkout</h1>
        <Button
          onClick={() => handleCheckout(cartItems)}
          variant="contained"
          disabled={loading}
          type="submit"
          sx={{
            color: "white",
          }}
        >
          {loading ? "Loading..." : "Checkout"}
        </Button>
      </div>
    </Container>
  );
}
