"use client";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import theme from "../_styles/muiTheme";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:3000/api/stripe/checkout", {
      method: "POST",
    });

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
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: theme.palette.primary.contrastText,
      }}
    >
      <div>
        <h1>Checkout</h1>
        <Button
          onClick={handleCheckout}
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
};
