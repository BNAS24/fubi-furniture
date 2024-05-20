"use client";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { featuredCategories } from "./_assets/homepage/featuredCategories";
import { slide } from "./_assets/homepage/slideImages";
import { HomepageButton } from "./_components/buttons/HomepageButton1";
import EmblaCarousel from "./_components/carousels/EmblaCarousel";
import styles from "./page.module.css";

// Homepage component
export default function Home() {


  return (
    <div>
      <div className={styles["hero-container"]}>
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
          }}
        >
          Elevate your comfort: Vintage Voyage - Where Cozy Meets Chic!
        </Typography>
        <HomepageButton text="Shop Now" variant="contained" />
      </div>
      <div className={styles["featured-products"]}>
        {/*Carousel component */}
        <EmblaCarousel
          slides={slide}
        />
      </div>
      {/*Featured Categories*/}
      <Container disableGutters={true} maxWidth={false}>
        {featuredCategories.map((category, index) => (
          <div
            key={index}
            className={[
              styles["featured-categories"],
              styles[category.className],
            ].join(" ")}
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
              {category.title}
            </Typography>
            <HomepageButton text="Shop Now" variant="contained" />
          </div>
        ))}
      </Container>
    </div>
  );
}
