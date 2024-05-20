import { Container } from "@mui/material";
import SliderPagination from "../svg/SliderPagination";
import Typography from "@mui/material/Typography";
import { HomepageButton } from "../buttons/HomepageButton1";

type Carousel = {
  slides: any;
  selectedIndex: number;
  emblaRef: any;
};

// Slider component
export const EmblaCarousel = ({
  slides,
  selectedIndex,
  emblaRef,
}: Carousel) => {
  return (
    //Slides wrapper div to keep components/elements together
    <div>
      {/*Main embla slides container*/}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any, index: number) => (
            <Container
              key={index}
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
          ))}
        </div>
      </div>
      {/*Slider pagination dots*/}
      <SliderPagination selectedIndex={selectedIndex} />
    </div>
  );
};
