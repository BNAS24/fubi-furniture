"use client";
import { HomepageButton } from "./_components/buttons/HomepageButton1";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./page.module.css";
import { slide } from "./_assets/homepage/slideImages";
import { usePagination } from "./_helpers/emblaPagination";
import { EmblacCarousel } from "./_components/carousels/emblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

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
      <div
        className={[styles["featured-categories"], styles["lamps"]].join(" ")}
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
          Lamps
        </Typography>
        <HomepageButton text="Shop" variant="contained" />
      </div>
      <div
        className={[styles["featured-categories"], styles["sofas"]].join(" ")}
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
          Sofas
        </Typography>
        <HomepageButton text="Shop" variant="contained" />
      </div>
      <div
        className={[styles["featured-categories"], styles["pillows"]].join(" ")}
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
          Pillows
        </Typography>
        <HomepageButton text="Shop" variant="contained" />
      </div>
    </div>
  );
}
