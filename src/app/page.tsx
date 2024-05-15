"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { featuredCategories } from "./_assets/homepage/featuredCategories";
import { slide } from "./_assets/homepage/slideImages";
import { HomepageButton } from "./_components/buttons/HomepageButton1";
import { EmblacCarousel } from "./_components/carousels/emblaCarousel";
import { usePagination } from "./_helpers/emblaPagination";
import styles from "./page.module.css";

// Homepage component
export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
  const { selectedIndex } = usePagination(emblaApi);

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
        <HomepageButton text="Shop" variant="contained" />
      </div>
      <div className={styles["featured-products"]}>
        {/*Carousel component */}
        <EmblacCarousel
          slides={slide}
          selectedIndex={selectedIndex}
          emblaRef={emblaRef}
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
            <HomepageButton text="Shop" variant="contained" />
          </div>
        ))}
      </Container>
    </div>
  );
}
