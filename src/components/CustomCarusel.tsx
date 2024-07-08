import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "./CustomCard";

interface ExampleCarouselImageProps {
  text: string;
}

// ExampleCarouselImage component definition
const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  text,
}) => (
  <img
    className="d-block w-100"
    src={`https://via.placeholder.com/800x400?text=${encodeURIComponent(text)}`}
    alt={text}
  />
);

const CustomCarousel = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: "5%",
        bgcolor: "#B6C7AA",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Carousel
              fade
              style={{
                width: isSmallScreen ? "90%" : "100%",
                height: "auto",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              aria-roledescription="carousel"
              aria-live="polite"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  e.stopPropagation();
                }
              }}
            >
              <Carousel.Item role="group" aria-labelledby="slide1">
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption style={{ paddingTop: "2%" }} id="slide1">
                  First slide
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item role="group" aria-labelledby="slide2">
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption style={{ paddingTop: "2%" }} id="slide2">
                  Second slide
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item role="group" aria-labelledby="slide3">
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption style={{ paddingTop: "2%" }} id="slide3">
                  Third slide
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CustomCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomCarousel;
