import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FilterButton } from "../../_components/buttons/FilterButton";
import Image from "next/image";

async function getImages(category: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/stripe/products/?category=${category}`,
    {
      cache: "no-store", // Very important for fetching data from the database
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await response.json();

  return products;
}

export default async function Dashboard({
  params,
}: {
  params: { category: string };
}) {
  const imageCategory = params.category;
  const products = await getImages(imageCategory);
  const updatedParams = {
    ...params, // Spread the original params object to copy its properties
    category:
      params.category.charAt(0).toUpperCase() + params.category.slice(1), // Uppercase the first letter of the category string
  };
  const pageCategoryTitle = updatedParams.category;

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
        <Typography
          fontWeight={500}
          sx={{
            fontSize: "1.5rem",
          }}
        >
          {pageCategoryTitle}
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
            <Container disableGutters={true} maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${product.image}`}
                alt={product.name}
                style={{
                  flexShrink: 0,
                }}
                width={100}
                height={100}
                sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
