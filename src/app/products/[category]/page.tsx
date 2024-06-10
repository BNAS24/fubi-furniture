"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FilterButton } from "../../_components/buttons/FilterButton";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useCart } from "@/app/_context/CartContext";
import { useBodyStyle } from "@/app/_context/BodyStylesContext";

export interface Product {
  product_id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  fallbackImages?: [];
  stripe_price_link?: string;
}

export default function ProductPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = pathname.split("/")[2];
  const item = searchParams.get("item");

  const [products, setProducts] = useState<Product[]>([]);
  const [itemFiltered, setItemFiltered] = useState<Product | null>(null);

  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(
    (item) => item.product_id === itemFiltered?.product_id
  );

  const { setBodyStyle } = useBodyStyle();

  useEffect(() => {
    async function getProducts(category: any) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/stripe/products/?category=${category}`,
        {
          next: { revalidate: 3600 },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const products = await response.json();

      // Store products array in state
      setProducts(products);

      // Filtering through products array to get the item selected
      setItemFiltered(
        products.filter((product: any) => product.product_id === item)[0]
      );
    }

    // Calls the getProducts function with the category string extracted from the url
    getProducts(category);
  }, [category, item]);

  // Prevents scrolling when item page is showing
  useEffect(() => {
    const bodyStyleDefault = {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      minHeight: "100vh",
      background: "var(--main-white)",
      overflowX: "hidden",
      fontFamily: "__Inter_aaf875, Roboto, sans-serif",
    };

    const bodyStyleFixed = {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      minHeight: "100vh",
      background: "var(--main-white)",
      overflowX: "hidden",
      fontFamily: "__Inter_aaf875, Roboto, sans-serif",
      position: "fixed",
      inset: 0,
    };

    if (item && itemFiltered) {
      setBodyStyle(bodyStyleFixed);
    } else {
      setBodyStyle(bodyStyleDefault);
    }

    return () => {
      // Ensure cleanup to reset body style
      setBodyStyle(bodyStyleDefault);
    };
  }, [item, itemFiltered, setBodyStyle]);

  return (
    <>
      {/*Container for category of products*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "2.5rem",
          borderBottom: "2px solid var(--light-grey2)",
          backgroundColor: "var(--main-white)",
        }}
      >
        {item && itemFiltered && (
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              position: "fixed",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              paddingTop: "4rem",
              backgroundColor: "var(--main-white)",
              inset: 0,
              zIndex: "98",
            }}
          >
            <Image
              src={
                `${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${itemFiltered.image}` ||
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclarionhealthcare.com%2Fcategory%2Frare-diesease%2F&psig=AOvVaw08oOaZP4d9cPYCdn3Bm8m8&ust=1717307613000000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOix1MTbuYYDFQAAAAAdAAAAABAE"
              }
              alt={itemFiltered.name || "Fubi furniture item"}
              priority
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1:1",
              }}
              width={100}
              height={100}
              sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <Container
              maxWidth={false}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography fontWeight={600} variant="h3" align="left">
                {itemFiltered.name}
              </Typography>
              <Typography>${itemFiltered.price}</Typography>
              <Typography variant="body1" align="left">
                {itemFiltered.description}
              </Typography>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={() => addToCart(itemFiltered)}
                disabled={isInCart}
                sx={{
                  alignSelf: "center",
                  marginTop: "16px",
                }}
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </Container>
          </Container>
        )}
        <Typography
          fontWeight={500}
          sx={{
            fontSize: "1.5rem",
          }}
        >
          {category}
        </Typography>
      </Container>

      {/*Container for filtering and results count*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          backgroundColor: "var(--main-white)",
        }}
      >
        <Typography
          sx={{
            color: "var(--light-grey2)",
          }}
        >
          {`results ${products.length}`}
        </Typography>
        <FilterButton />
      </Container>

      {/*Container for products collection*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "1rem",
          width: "100vw",
          height: "auto",
          padding: "0 1rem 1.5rem 1rem",
          backgroundColor: "var(--main-white)",
        }}
      >
        {products.map((product: any) => (
          <Container
            key={product.product_id}
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gridColumn: "span 6",
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          >
            {/*Changes these defulat sizes, this was just made up to get rid of errors*/}
            <Container
              disableGutters={true}
              maxWidth={false}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {/*Link wrapped around product image*/}
              <Link
                style={{ width: "100%", height: "100%" }}
                href={`/products/${category}?item=${product.product_id}`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${product.image}`}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1:1",
                  }}
                  width={100}
                  height={100}
                  sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              <Container disableGutters={true} maxWidth={false}>
                <Typography
                  align="center"
                  noWrap
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  align="center"
                  noWrap={true}
                  sx={{
                    fontSize: "0.7rem",
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  align="center"
                  noWrap
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  {`\$${product.price}`}
                </Typography>
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </>
  );
}
