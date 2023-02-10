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
        <Box>
          <div
            style={{
              position: "fixed",
              top: 10,
              right: 0,
              left: 0,
              textAlign: "center",
            }}
          >
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                router.push("/invitation");
              }}
            >
              See More
            </Button>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Home;
