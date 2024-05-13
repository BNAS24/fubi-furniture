"use client";
import { HomepageButton } from "./../components/buttons/HomepageButton";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./page.module.css";

// Slider component
const EmblacCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles["embla"]} ref={emblaRef}>
      <div className={styles["embla__container"]}>
        <div className={styles["embla__slide"]}>
          <Typography
            align="center"
            noWrap
            sx={{
              color: "white",
              fontSize: "32px",
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Pillow Set
          </Typography>
          <div className={styles["pair-of-buttons-container"]}>
            <HomepageButton text="Shop" variantProp="contained" />
            <HomepageButton text="Buy" variantProp="outlined" />
          </div>
        </div>
        <div className={styles["embla__slide"]}>
          <Typography
            align="center"
            noWrap
            sx={{
              color: "white",
              fontSize: "32px",
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Dining Room Set
          </Typography>
          <div className={styles["pair-of-buttons-container"]}>
            <HomepageButton text="Shop" variantProp="contained" />
            <HomepageButton text="Buy" variantProp="outlined" />
          </div>
        </div>
        <div className={styles["embla__slide"]}>
          <Typography
            align="center"
            noWrap
            sx={{
              color: "white",
              fontSize: "32px",
              textShadow: "0px 2px 4px #000000A6",
            }}
          >
            Moon Lamp
          </Typography>
          <div className={styles["pair-of-buttons-container"]}>
            <HomepageButton text="Shop" variantProp="contained" />
            <HomepageButton text="Buy" variantProp="outlined" />
          </div>
        </div>
      </div>
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
            fontSize: "40px",
            textShadow: "0px 2px 4px #000000A6",
          }}
        >
          Vintage Voyage
        </Typography>
        <HomepageButton text="Shop" variantProp="contained" />
      </div>
      <div className={styles["featured-products"]}>
        <EmblacCarousel />
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
            fontSize: "40px",
            textShadow: "0px 2px 4px #000000A6",
          }}
        >
          Lamps
        </Typography>
        <HomepageButton text="Shop" variantProp="contained" />
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
            fontSize: "40px",
            textShadow: "0px 2px 4px #000000A6",
          }}
        >
          Sofas
        </Typography>
        <HomepageButton text="Shop" variantProp="contained" />
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
            fontSize: "40px",
            textShadow: "0px 2px 4px #000000A6",
          }}
        >
          Pillows
        </Typography>
        <HomepageButton text="Shop" variantProp="contained" />
      </div>
    </div>
  );
}
