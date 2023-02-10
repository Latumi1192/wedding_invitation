import * as React from "react";
import Box from "@mui/material/Box";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import PageBar from "./PageBar";
import "@fontsource/itim";
import { useRouter } from "next/router";

export default function Confirmation() {
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
        //light: "#b2dfdb",
        light: "#abbdce",
        //main: "#5F8575",
        main: "#5b799e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <PageBar />
      <Box
        m="auto"
        sx={{
          mt: 1,
          width: 4 / 5,
          border: 3,
          backgroundColor: "primary.light",
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiButton-root": { m: 1 },
          "& .MuiTypography-root": { m: 1 },
          "& .MuiBox-root": { mt: 10 },
        }}
      >
        <img src="https://i.imgur.com/w55UKKU.jpg"></img>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            router.push("/aboutus");
          }}
        >
          Tìm hiểu cô dâu và chú rể
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            router.push("/photoslide");
          }}
        >
          Xem ảnh của chúng tôi
        </Button>
      </Box>
    </ThemeProvider>
  );
}
