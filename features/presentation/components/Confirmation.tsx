import * as React from "react";
import Box from "@mui/material/Box";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
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
        light: "#b2dfdb",
        main: "#5F8575",
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
        <Typography>Xin cám ơn PLACEHOLDER, </Typography>
        <Typography>Bạn sẽ đến dự PLACEHOLDER2 với chúng tôi, </Typography>
        <Typography>vào lúc PLACEHOLDER3, </Typography>
        <Typography>tại PLACEHOLDER4, </Typography>
        <Typography>cùng với PLAYCEHOLDER5 </Typography>
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
      </Box>
    </ThemeProvider>
  );
}
