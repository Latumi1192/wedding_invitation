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
          src="https://i.imgur.com/PJBeAtU.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.imgur.com/rzmGERD.png"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ margin: 0, padding: 0 }}>
        <a href="https://www.google.com/maps/dir/53.5506201,9.9545555/127+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Xu%C3%A2n+%C4%90%E1%BB%89nh,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@2.230892,-29.1995225,3z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135aacc11900775:0x7ec8ed85eb778a!2m2!1d105.7868136!2d21.0763254">
          <img
            src="https://i.imgur.com/NVG97Z9.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
      <div style={{ margin: 0, padding: 0 }}>
        <a href="https://www.google.com/maps/dir/53.5506201,9.9545555/127+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Xu%C3%A2n+%C4%90%E1%BB%89nh,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@2.230892,-29.1995225,3z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135aacc11900775:0x7ec8ed85eb778a!2m2!1d105.7868136!2d21.0763254">
          <img
            src="https://i.imgur.com/TXZGBHz.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>

      <div style={{ margin: 0, padding: 0 }}>
        <a href="https://www.google.com/maps/dir/53.4609499,9.9818239/51+Ng.+%C4%90%C3%ACnh+%C4%90%E1%BA%A1i,+T%E1%BB%95+d%C3%A2n+ph%E1%BB%91+s%E1%BB%91+3,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vietnam/@2.2267703,-29.1508278,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135ac751c210f5b:0x4acb0f9aa5ea33de!2m2!1d105.850669!2d21.004802">
          <img
            src="https://i.imgur.com/u7L6RSk.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
      <div style={{ margin: 0, padding: 0 }}>
        <a href="https://www.google.com/maps/dir//Long+Vi+Palace/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3135ab8774046e5f:0x749c4be1d00bb432?sa=X&ved=2ahUKEwjit5GNp4v9AhV88rsIHTilC6MQ9Rd6BAhjEAQ">
          <img
            src="https://i.imgur.com/hRZYn7F.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
      <div style={{ margin: 0, padding: 0 }}>
        <img
          src="https://i.imgur.com/ldegcno.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
