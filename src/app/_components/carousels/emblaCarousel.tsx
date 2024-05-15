import { Container } from "@mui/material";
import { SliderPagination } from "../svg/slider-pagination";
import Typography from "@mui/material/Typography";
import { HomepageButton } from "../buttons/HomepageButton1";

type Slide = {
  name: string;
  backgroundImage: string;
  id: number;
};

type PropType = {
  slides: Slide[];
  selectedIndex: number;
  emblaRef: any;
};

// Slider component
export const EmblacCarousel: React.FC<PropType> = (props) => {
  const { slides, selectedIndex, emblaRef } = props;

  return (
    //Slides wrapper div to keep components/elements together
    <div>
      {/*Main embla slides container*/}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
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
                {/* {slide.name} */}
                {/* {index} */}
                {`selected: ${selectedIndex}`}
              </Typography>
              <div className="pair-of-buttons-container">
                <HomepageButton text="Shop" variant="contained" />
                <HomepageButton text="Buy" variant="outlined" />
              </div>
            </Container>
          ))}
        </div>
      </div>
      {/*Slider pagination dots*/}
      <SliderPagination slide={slides} selectedIndex={selectedIndex} />
    </div>
  );
};
