import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function PageBar() {
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5F8575",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary">
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-evenly" }}>
            <Button
              sx={{ color: "white", display: "block" }}
              onClick={() => {
                router.push("/aboutus");
              }}
            >
              About us
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                router.push("/photoslide");
              }}
            >
              Photo
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                router.push("/invitation");
              }}
            >
              Phúc đáp thiệp mời
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Contacts
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
