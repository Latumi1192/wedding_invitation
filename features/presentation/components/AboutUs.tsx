import * as React from "react";
import Box from "@mui/material/Box";
import PageBar from "./PageBar";
import router from "next/router";
import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";

export default function AboutUs() {
  const [bride, setBride] = React.useState(true);
  const [groom, setGroom] = React.useState(true);

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
      <div>
        <div>
          <PageBar />
        </div>
        <div>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={0}
          >
            <Grid item xs={12} sm={6} md={8} lg={4}>
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
            <Grid item xs={12} sm={6} md={8} lg={4}>
              <Box
                sx={{
                  m: 1,
                  minHeight: "600px",
                  width: "95%",
                  border: 3,
                  backgroundColor: "primary.light",
                  borderColor: "primary.main",
                  borderRadius: "8px",
                  "& .MuiTypography-root": { m: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  01.04.2018{" "}
                </Typography>
                <Typography>
                  Anh gặp em vào ngày cá tháng tư, nên anh gọi em là "Cú Lừa".
                  Anh, một catperson, em lại là một dogperson. Sao ta lại quen
                  nhau được nhỉ?
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  18.05.2018{" "}
                </Typography>

                <Typography>Anh chính thức ngỏ lời yêu </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  31.01.2022{" "}
                </Typography>

                <Typography>
                  Anh xin phép bố mẹ hai bên để được rước em về làm "nóc nhà"
                  của anh
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  18.03.2022
                </Typography>

                <Typography>
                  Chúng ta chính thức đặt bút kí vào chung một tờ giấy và rồi từ
                  nay chúng ta là người một nhà
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  20.03.2022{" "}
                </Typography>

                <Typography>
                  Năm Covid thứ ba, bố mẹ hai bên tổ chức cho chúng ta một lễ ăn
                  hỏi thời 4.0 qua màn hình laptop
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  30.04.2022{" "}
                </Typography>

                <Typography>
                  Chúng ta có một bữa tiệc cưới xinh xinh với bạn bè ở nơi đất
                  khách, chính thức xuất hiện với tư cách vợ chồng
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 6,
                    textAlign: "center",
                    color: "primary.main",
                  }}
                >
                  25.02.2023 - coming soon
                </Typography>

                <Typography>
                  Chúng mình mong đợi tới đám cưới, cùng sự hiện diện của những
                  người thân yêu, bạn bè thân thiết
                </Typography>
              </Box>
              <Box sx={{ width: "95%", height: "30px" }}></Box>
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
    </ThemeProvider>
  );
}
