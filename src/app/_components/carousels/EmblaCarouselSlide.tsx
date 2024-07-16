import { SlideContent } from "@/app/_assets/homepage/slideImages";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { usePagination } from "../../_helpers/emblaPagination";
import { CallToAction } from "../buttons/CallToAction";
import SliderPagination from "../svg/SliderPagination";
import Image from "next/image";

interface PropType {
  slides: SlideContent[];
}

// Slider component
export default function EmblaCarouselSlide({ slides }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [Autoplay()]);
  const { selectedIndex } = usePagination(emblaApi);

  console.log("slides", slides);
  
  return (
    //Slides wrapper div to keep elements together
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "50vh",
          sm: "80vh",
          md: "100vh",
          lg: "70vh",
          xl: "100vh",
        },
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
            width: "100%",
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
                width: "33.33%",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.name}
                style={{
                  objectFit: "cover",
                }}
                fill
                quality={100}
                priority={true}
              />
              <Typography
                align="center"
                noWrap
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "2rem",
                    sm: "2.3rem",
                    md: "2.5rem",
                    lg: "2.5rem",
                    xl: "3rem",
                  },
                  textShadow: "0px 2px 4px #000000A6",
                  zIndex: "2",
                }}
              >
                {slide.name}
              </Typography>
              <div className="pair-of-buttons-container">
                <CallToAction
                  text="Shop Now"
                  variant="contained"
                  link={slide.link}
                />
                <CallToAction text="Buy" variant="outlined" />
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
