"use client";
import { HomepageButton } from "./_components/buttons/HomepageButton1";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import styles from "./page.module.css";
import { slide } from "./_assets/homepage/slideImages";
import { Container } from "@mui/material";
import { SliderPagination } from "./_components/svg/slider-pagination";
import { useCallback, useEffect, useState } from "react";
import { usePagination } from "./_components/svg/slider-pagination";

type Slide = {
  name: string;
  backgroundImage: string;
  id: number;
};

type PropType = {
  slides?: Slide[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = { loop: true };

// Slider component
export const EmblacCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.slidesInView());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const { selectedIndex, scrollSnaps } = usePagination(emblaApi);

  console.log({
    scrollSnaps: scrollSnaps,
    selectedIndex: selectedIndex,
  });

  return (
    //Slides wrapper div to keep components/elements together
    <div>
      {/*Main embla slides container*/}
      <div className={styles["embla"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {slide.map((slide) => (
            <Container
              key={slide.id}
              disableGutters={true}
              maxWidth={false}
              className={styles["embla__slide"]}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "none",
                backgroundSize: "cover",
              }}
            >
              <Typography
                align="center"
                noWrap
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  textShadow: "0px 2px 4px #000000A6",
                }}
              >
                {slide.name}
              </Typography>
              <div className={styles["pair-of-buttons-container"]}>
                <HomepageButton text="Shop" variant="contained" />
                <HomepageButton text="Buy" variant="outlined" />
              </div>
            </Container>
          ))}
        </div>
      </div>
      {/*Slider pagination dots*/}
      <SliderPagination indexSelected={selectedIndex}/>
    </div>
  );
};

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
        <HomepageButton text="Shop" variant="contained" />
      </div>
      <div className={styles["featured-products"]}>
        <EmblacCarousel slides={slide} options={OPTIONS} />
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
