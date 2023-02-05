import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Menu } from "@mui/material";
import PageBar from "./PageBar";

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
            mt: 1,
            border: 3,
            "& .MuiBox-root": { m: 1 },
          }}
        >
          {bride && (
            <Box
              sx={{
                backgroundImage: `url(https://i.ibb.co/JpGkZBg/DSC00868.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderColor: "primary.main",
                border: 2,
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
                borderColor: "primary.main",
                border: 2,
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
                backgroundImage: `url(https://i.ibb.co/JpGkZBg/DSC00868.jpg)`,
                backgroundSize: "cover",
                height: "800px",
                width: "48%",
                borderColor: "primary.main",
                border: 2,
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
                borderColor: "primary.main",
                border: 2,
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
