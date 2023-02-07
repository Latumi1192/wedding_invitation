import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PageBar from "./PageBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/itim";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function PhotoSlide() {
  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
      button: {},
    },
    palette: {
      primary: {
        main: "#5F8575",
      },
    },
  });
  const images = [
    "https://i.ibb.co/p29SvtP/1.png",
    "https://i.ibb.co/gMVQGBz/2.png",
    "https://i.ibb.co/x2LrN3X/3.png",
    "https://i.ibb.co/nPZVq4b/nh-b-a-website.png",
    "https://i.ibb.co/p29SvtP/1.png",
    "https://i.ibb.co/gMVQGBz/2.png",
    "https://i.ibb.co/x2LrN3X/3.png",
    "https://i.ibb.co/p29SvtP/1.png",
    "https://i.ibb.co/gMVQGBz/2.png",
    "https://i.ibb.co/x2LrN3X/3.png",
  ];
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PageBar />
      </div>
      <div className="box">
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </ThemeProvider>
  );
}
