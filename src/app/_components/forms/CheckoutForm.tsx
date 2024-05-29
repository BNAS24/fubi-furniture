"use client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Elements,
  PaymentElement,
  LinkAuthenticationElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { FormEvent, useState } from "react";
import theme from "../../_styles/muiTheme";

interface CheckoutFormProps {
  product: {
    image: string;
    name: string;
    age: number;
    description: string;
  };
  clientSecret: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutForm({
  product,
  clientSecret,
}: CheckoutFormProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src="/Furniture/hero-image-verticle-2.jpg"
        width={300}
        height={300}
        alt={product.name}
      />
      <Typography sx={{ color: theme.palette.primary.contrastText }}>
        {product.name}
      </Typography>
      <Typography
        sx={{ color: theme.palette.primary.contrastText }}
      >{`\$${product.age}.00`}</Typography>
      <Typography sx={{ color: theme.palette.primary.contrastText }}>
        {product.description}
      </Typography>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form />
      </Elements>
    </Container>
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (stripe === null || elements === null || email === null) {
      return;
    }

    setIsLoading(true);

    // const orderExists = await userOrderExists(email, productId);

    // if (orderExists) {
    //   setErrorMessage(
    //     "You have already purchased this product. Try downloading it from the my orders page."
    //   );
    //   setIsLoading(false);
    //   return;
    // }

    // Check for existing order
    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-sucess`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message as string);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100%",
      //   width: "100%",
      // }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <CardHeader
          sx={{
            width: "100%",
            height: "20px",
            color: "black",
          }}
          title="Checkout"
          titleTypographyProps={{
            align: "center",
          }}
        />
        <CardContent>
          <PaymentElement />
          <LinkAuthenticationElement
            onChange={(e) => setEmail(e.value.email)}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained">
            {isLoading ? "Purchasing..." : "Purchase!"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
