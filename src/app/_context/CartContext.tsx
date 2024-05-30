import { createContext, useContext } from "react";

// Function to fetch the products from the api
async function getProducts(category: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/stripe/products`
    //   {
    //     cache: "no-store", // Very important for fetching data from the database
    //   }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await response.json();

  return products;
}

// Product context
export function CartContext() {
  return;
}
