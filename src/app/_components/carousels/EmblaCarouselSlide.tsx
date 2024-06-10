import { SlideContent } from "@/app/_assets/homepage/slideImages";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { usePagination } from "../../_helpers/emblaPagination";
import { HomepageButton } from "../buttons/CallToAction";
import SliderPagination from "../svg/SliderPagination";
import Link from "next/link";

interface PropType {
  slides: SlideContent[];
}

// Slider component
export default function EmblaCarouselSlide({ slides }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex } = usePagination(emblaApi);

  return (
    //Slides wrapper div to keep elements together
    <div>
      {/*Main embla slides container*/}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any) => (
            <Link
              key={slide.id}
              href={slide.link}
              style={{
                all: "unset",
              }}
            >
              <Container
                disableGutters={true}
                maxWidth={false}
                className="embla__slide"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
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
                <div className="pair-of-buttons-container">
                  <HomepageButton text="Shop Now" variant="contained" />
                  <HomepageButton text="Buy" variant="outlined" />
                </div>
              </Container>
            </Link>
          ))}
        </div>
      </div>
      {/*Slider pagination dots*/}
      <SliderPagination selectedIndex={selectedIndex} />
    </div>
  );
}
