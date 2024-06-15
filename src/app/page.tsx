"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { featuredCategories } from "./_assets/homepage/featuredCategories";
import { slide } from "./_assets/homepage/slideImages";
import { CallToAction } from "./_components/buttons/CallToAction";
import EmblaCarouselSlide from "./_components/carousels/EmblaCarouselSlide";
import Image from "next/image";

// Homepage component
export default function Home() {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {/*Hero component*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: {
            xs: "85vh",
            sm: "85vh",
            md: "85vh",
            lg: "85vh",
            xl: "110vh",
          },
          width: "100%",
        }}
      >
        <Image
          src="/Furniture/hero-image-verticle-2.jpg"
          alt="Vintage Voyage Hero"
          fill
          style={{
            objectFit: "cover",
          }}
          priority={true}
          quality={100}
        />
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 2,
          }}
        >
          <Typography
            align="center"
            noWrap
            fontWeight={400}
            sx={{
              color: "white",
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
                xl: "5.5rem",
              },
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Vintage Voyage
          </Typography>
          <Typography
            align="center"
            fontWeight={200}
            sx={{
              color: "white",
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "2.1rem",
              },
              maxWidth: "80%",
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Elevate your comfort: Vintage Voyage - Where Cozy Meets Chic!
          </Typography>
          <CallToAction text="Shop Now" variant="contained" />
        </Container>
      </Container>

      {/*Carousel component */}
      <EmblaCarouselSlide slides={slide} />

      {/*Featured Categories Component*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          height: "auto",
        }}
      >
        {featuredCategories.map((category) => (
          <Container
            key={category.id}
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              height: "85vh",
              width: "100%",
            }}
          >
            <Image
              src={category.image}
              alt={category.title}
              style={{
                objectFit: "cover",
              }}
              fill
              priority={true}
              quality={100}
            />
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <Typography
                align="center"
                noWrap
                fontWeight={500}
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "",
                    lg: "",
                    xl: "",
                  },
                  textShadow: "0px 2px 4px #000000A6",
                  zIndex: 2,
                }}
              >
                {category.title}
              </Typography>
              <CallToAction
                text="Shop Now"
                variant="contained"
                link={category.link}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
