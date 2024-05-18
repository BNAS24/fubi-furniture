import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FilterButton } from "../_components/buttons/FilterButton";
import Image from "next/image";

async function getData() {
  const response = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-store", // Very important for fetching data from the database
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await response.json();

  return products;
}

async function getImages() {
  const response = await fetch(`http://localhost:3000/api/images`, {
    cache: "no-store", // Very important for fetching data from the database
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await response.json();

  return products;
}

export default async function Dashboard() {
  const products = await getData();
  const images = await getImages();
  console.log("images", images);
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
          borderBottom: "2px solid var(--light-grey2)",
          height: "2.5rem",
        }}
      >
        <Typography
          fontWeight={500}
          sx={{
            fontSize: "1.5rem",
          }}
        >
          Category
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
        }}
      >
        <Typography
          sx={{
            color: "var(--light-grey2)",
          }}
        >
          {`results`}
        </Typography>
        <FilterButton />
      </Container>

      {/*Container for products collection*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "1rem",
          paddingX: "1rem",
        }}
      >
        {images.map((image: any, index: number) => (
          <Container
            key={index}
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              gridColumn: "span 6",
            }}
          >
            <Typography align="center" fontWeight={500}>
              Hello world
            </Typography>
            {/*!!! IMPORTANT make sure to change to a nextjs image for performance */}
            <Image
              src={image.url}
              alt={image.pathname}
              height={500}
              width={500}
            />
          </Container>
        ))}
      </Container>
    </>
  );
}
