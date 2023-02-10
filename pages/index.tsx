import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import router from "next/router";
import "@fontsource/itim";

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.imgur.com/IgjejRC.gif)`,
    height: "930px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
    },
    palette: {
      primary: {
        light: "#b2dfdb",
        main: "#5F8575",
      },
    },
  });
  return (
    <div style={bgStyle}>
      <ThemeProvider theme={theme}>
        <Box>
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              router.push("/invitation");
            }}
          >
            Tham dự
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Home;
