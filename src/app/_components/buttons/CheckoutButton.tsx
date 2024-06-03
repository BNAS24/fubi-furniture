import Button from "@mui/material/Button";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useCart } from "../../_context/CartContext";

interface CheckoutButtonProps {
  closeBag: () => void;
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const CheckoutButton = ({ closeBag }: CheckoutButtonProps) => {
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
      <Button
        onClick={() => handleCheckout(cartItems)}
        variant="contained"
        fullWidth={true}
        disableElevation={true}
        disabled={loading}
        type="submit"
        sx={{
          flexShrink: 0,
          height: "64px",
          padding: "0 0",
        }}
      >
        {loading ? "Loading..." : "Proceed to Checkout"}{" "}
      </Button>
  );
};
