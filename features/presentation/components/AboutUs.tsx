import * as React from "react";
import Box from "@mui/material/Box";
import PageBar from "./PageBar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function AboutUs() {
  const [bride, setBride] = React.useState(true);
  const [groom, setGroom] = React.useState(true);

  return (
    <Box>
      <div>
        <PageBar />
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            alignContent: "flex-start",
            "& .MuiBox-root": { m: 1 },
          }}
        >
          {bride && (
            <Box
              sx={{
                backgroundImage: `url(https://i.imgur.com/Kex0iPW.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderRadius: "8px",
              }}
              onClick={() => setBride(false)}
            >
              Bride
            </Box>
          )}
          {!bride && (
            <Box
              sx={{
                backgroundImage: `url(https://i.ibb.co/JpGkZBg/DSC00868.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderRadius: "8px",
              }}
              onClick={() => setBride(true)}
            >
              BrideInfo
            </Box>
          )}
          {groom && (
            <Box
              sx={{
                backgroundImage: `url(https://i.imgur.com/8BkQy0P.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderRadius: "8px",
              }}
              onClick={() => setGroom(false)}
            >
              Groom
            </Box>
          )}
          {!groom && (
            <Box
              sx={{
                backgroundImage: `url(https://i.ibb.co/JpGkZBg/DSC00868.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderRadius: "8px",
              }}
              onClick={() => setGroom(true)}
            >
              GroomInfo
            </Box>
          )}
        </Box>
      </div>
    </Box>
  );
}
