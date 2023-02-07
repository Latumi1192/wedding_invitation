import AboutUs from "@/features/presentation/components/AboutUs";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "@fontsource/itim";

const AboutUsPage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
      button: {
        fontStyle: "italic",
      },
    },
    palette: {
      primary: {
        light: "#b2dfdb",
        main: "#5F8575",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AboutUs />
    </ThemeProvider>
  );
};

export default AboutUsPage;
