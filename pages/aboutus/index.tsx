import AboutUs from "@/features/presentation/components/AboutUs";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "@fontsource/itim";

const AboutUsPage = () => {
  const bgStyle = {
    backgroundColor: "#abbdce",
    backgroundImage: "none",
  };
  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
      button: {
        fontStyle: "italic",
      },
    },
    palette: {
      primary: {
        //light: "#b2dfdb",
        light: "#abbdce",
        //main: "#5F8575",
        main: "#5b799e",
      },
    },
  });
  return (
    <div style={bgStyle}>
      <ThemeProvider theme={theme}>
        <AboutUs />
      </ThemeProvider>
    </div>
  );
};

export default AboutUsPage;
