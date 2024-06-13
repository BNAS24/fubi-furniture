import { SlideContent } from "@/app/_assets/homepage/slideImages";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { usePagination } from "../../_helpers/emblaPagination";
import { HomepageButton } from "../buttons/CallToAction";
import SliderPagination from "../svg/SliderPagination";
import Image from "next/image";

interface PropType {
  slides: SlideContent[];
}

// Slider component
export default function EmblaCarouselSlide({ slides }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex } = usePagination(emblaApi);

  return (
    //Slides wrapper div to keep elements together
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        position: "relative",
        width: "100%",
        height: "50vh",
      }}
    >
      {/*Main embla slides container*/}
      <Container
        disableGutters={true}
        maxWidth={false}
        ref={emblaRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          {slides.map((slide: any) => (
            <Container
              key={slide.id}
              disableGutters={true}
              maxWidth={false}
              className="embla__slide"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.name}
                sizes="100%"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                }}
                width={348}
                height={348}
                quality={100}
              />
              <Typography
                align="center"
                noWrap
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  textShadow: "0px 2px 4px #000000A6",
                  zIndex: "2",
                }}
              >
                {slide.name}
              </Typography>
              <div className="pair-of-buttons-container">
                <HomepageButton
                  text="Shop Now"
                  variant="contained"
                  link={slide.link}
                />
                <HomepageButton text="Buy" variant="outlined" />
              </div>
            </Container>
          ))}
        </Container>
      </Container>
      {/*Slider pagination dots*/}
      <SliderPagination selectedIndex={selectedIndex} />
    </Container>
  );
}
