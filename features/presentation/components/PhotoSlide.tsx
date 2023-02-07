import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PageBar from "./PageBar";
import { Box } from "@mui/material";

export default function App() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div>
      <div>
        <PageBar />
      </div>
      <Box>
        <div ref={ref} className="keen-slider">
          <Box
            className="keen-slider__slide number-slide1"
            sx={{
              backgroundImage: `url(https://i.ibb.co/p29SvtP/1.png)`,
              backgroundSize: "cover",
            }}
          />
          <Box
            className="keen-slider__slide number-slide2"
            sx={{
              backgroundImage: `url(https://i.ibb.co/gMVQGBz/2.png)`,
              backgroundSize: "cover",
            }}
          />
          <Box
            className="keen-slider__slide number-slide3"
            sx={{
              backgroundImage: `url(https://i.ibb.co/x2LrN3X/3.png)`,
              backgroundSize: "cover",
            }}
          />
          <Box
            className="keen-slider__slide number-slide4"
            sx={{
              backgroundImage: `url(https://i.ibb.co/nPZVq4b/nh-b-a-website.png)`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </Box>
      <Box></Box>
    </div>
  );
}
