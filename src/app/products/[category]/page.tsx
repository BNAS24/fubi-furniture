"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FilterButton } from "../../_components/buttons/FilterButton";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

interface Product {
  product_id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  fallbackImages?: [];
  stripe_price_link?: string;
}

export default function Dashboard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = pathname.split("/")[2];
  const item = searchParams.get("item");

  const [products, setProducts] = useState<Product[]>([]);
  const [itemFiltered, setItemFiltered] = useState<Product | null>(null);
  console.log("item:", item);

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

    getProducts(category);
  }, [category, item]);

  console.log("itemFiltered:", itemFiltered);
  return (
    <>
      {item && itemFiltered && (
        <Container
        disableGutters={true}
        maxWidth={false}
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: "var(--main-white)",
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
            // disableGutters={true}
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
              sx={{
                alignSelf: "center",
                marginTop: "16px",
              }}
            >
              Add To Cart
            </Button>
          </Container>
        </Container>
      )}

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
          height: "2.5rem",
          paddingX: "1rem",
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
              <Link href={`/products/${category}?item=${product.product_id}`}>
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
