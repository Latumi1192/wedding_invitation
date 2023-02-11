import * as React from "react";
import Box from "@mui/material/Box";
import PageBar from "./PageBar";
import router from "next/router";
import { Grid, Typography } from "@mui/material";

export default function AboutUs() {
  const [bride, setBride] = React.useState(true);
  const [groom, setGroom] = React.useState(true);

  return (
    <div>
      <div>
        <PageBar />
      </div>
      <div>
        <Grid container alignItems="center" justifyContent="center" spacing={0}>
          <Grid item xs={12} sm={6} md={8} lg={4}>
            <Box
              sx={{
                width: "100%",
                minHeight: "1200px",
                maxHeight: "1500px",
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
                    backgroundImage: `url(https://i.imgur.com/Ugou4fJ.jpg)`,
                    backgroundSize: "cover",
                    minHeight: "600px",
                    width: "45%",
                    borderRadius: "8px",
                  }}
                  onClick={() => setBride(false)}
                ></Box>
              )}
              {!bride && (
                <Box
                  sx={{
                    backgroundImage: `url(https://i.imgur.com/qeuaMvd.jpg)`,
                    backgroundSize: "cover",
                    minHeight: "600px",
                    width: "45%",
                    borderRadius: "8px",
                  }}
                  onClick={() => setBride(true)}
                ></Box>
              )}
              {groom && (
                <Box
                  sx={{
                    backgroundImage: `url(https://i.imgur.com/ckY1vEm.jpg)`,
                    backgroundSize: "cover",
                    minHeight: "600px",
                    width: "45%",
                    borderRadius: "8px",
                  }}
                  onClick={() => setGroom(false)}
                ></Box>
              )}
              {!groom && (
                <Box
                  sx={{
                    backgroundImage: `url(https://i.imgur.com/isGdYLz.png)`,
                    backgroundSize: "cover",
                    minHeight: "600px",
                    width: "45%",
                    borderRadius: "8px",
                  }}
                  onClick={() => setGroom(true)}
                ></Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          textAlign: "center",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
          }}
          onClick={() => router.push("/invitation")}
        >
          <img
            src="https://i.imgur.com/9cRyYbI.png"
            alt="Image Button"
            style={{ width: "170px", height: "40px" }}
          />
        </button>
      </div>
    </div>
  );
}
