import * as React from "react";
import Box from "@mui/material/Box";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import PageBar from "./PageBar";
import "@fontsource/itim";
import { useRouter } from "next/router";

export default function Timelines() {
  const router = useRouter();

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
      <PageBar />
      <div style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
            margin: 0,
            padding: 0,
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/dq33EUR.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
