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
          src="https://i.imgur.com/xxmC1d6.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <a href="https://www.google.com/maps/dir/53.5506201,9.9545555/127+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Xu%C3%A2n+%C4%90%E1%BB%89nh,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@2.230892,-29.1995225,3z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135aacc11900775:0x7ec8ed85eb778a!2m2!1d105.7868136!2d21.0763254">
          <img
            src="https://i.imgur.com/xw0n0Y6.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a href="https://www.google.com/maps/dir/53.5506201,9.9545555/127+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Xu%C3%A2n+%C4%90%E1%BB%89nh,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@2.230892,-29.1995225,3z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135aacc11900775:0x7ec8ed85eb778a!2m2!1d105.7868136!2d21.0763254">
          <img
            src="https://i.imgur.com/ngDtbdc.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <img
          src="https://i.imgur.com/KDeFGRS.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/EWb1ISe.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <img
          src="https://i.imgur.com/IjcTbRL.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
