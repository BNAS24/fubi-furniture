"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { featuredCategories } from "./_assets/homepage/featuredCategories";
import { slide } from "./_assets/homepage/slideImages";
import { HomepageButton } from "./_components/buttons/CallToAction";
import EmblaCarouselSlide from "./_components/carousels/EmblaCarouselSlide";
import styles from "./page.module.css";
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
          height: "85vh",
          width: "100%",
        }}
      >
        <Image
          src="/Furniture/hero-image-verticle-2.jpg"
          alt="Vintage Voyage Hero"
          sizes="100%"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
          width={3930}
          height={5895}
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
            fontWeight={500}
            sx={{
              color: "white",
              fontSize: "2.5rem",
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
              fontSize: "1rem",
              maxWidth: "80%",
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Elevate your comfort: Vintage Voyage - Where Cozy Meets Chic!
          </Typography>
          <HomepageButton text="Shop Now" variant="contained" />
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
              sizes="100%"
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                // inset: 0,
                aspectRatio: "2/3",
              }}
              width={375}
              height={667}
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
                  fontSize: "2.5rem",
                  textShadow: "0px 2px 4px #000000A6",
                  zIndex: 2,
                }}
              >
                {category.title}
              </Typography>
              <HomepageButton
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
}
