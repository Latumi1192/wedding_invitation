import * as React from "react";
import "keen-slider/keen-slider.min.css";
import PageBar from "./PageBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/itim";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import router from "next/router";

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
    "https://i.imgur.com/gg4So3g.jpg",
    "https://i.imgur.com/MJYa6nv.jpg",
    "https://i.imgur.com/6mrjoku.jpg",
    "https://i.imgur.com/PFvaVea.jpg",
    "https://i.imgur.com/GsyRRY3.jpg",
    "https://i.imgur.com/QUW4PtJ.jpg",
    "https://i.imgur.com/Upc3lAK.jpg",
    "https://i.imgur.com/ejLDikm.jpg",
    "https://i.imgur.com/Q0LUfj3.jpg",
    "https://i.imgur.com/YT2GsDG.jpg",
    "https://i.imgur.com/YoHD1hn.jpg",
    "https://i.imgur.com/6vId72k.jpg",
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
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            textAlign: "center",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => router.push("/invitation")}
          >
            <img
              src="https://i.imgur.com/9cRyYbI.png"
              alt="Image Button"
              style={{ width: "170px", height: "40px" }}
            />
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}
