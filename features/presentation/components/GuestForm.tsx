import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  MenuItem,
  Menu,
  createTheme,
  ThemeProvider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import PageBar from "./PageBar";
import "@fontsource/itim";
import { useRouter } from "next/router";

export default function GuestForm() {
  const router = useRouter();

  const [guestOf, setGuestOf] = React.useState("Khách của");
  const [moreGuest, setMoreGuest] = React.useState(false);
  const [event, setEvent] = React.useState("Đến dự");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
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
    <ThemeProvider theme={theme}>
      <Box>
        <PageBar />
        <Box
          component="form"
          m="auto"
          sx={{
            mt: 1,
            border: 3,
            backgroundColor: "primary.light",
            borderColor: "primary.main",
            borderRadius: "16px",
            "& .MuiTextField-root": { m: 2, width: "25ch" },
            "& .MuiButton-root": { mt: 1, ml: 2, mb: 1 },
            "& .MuiTypography-root": { ml: 2, mb: 0 },
            "& .MuiFormGroup-root": { mt: 0, ml: 1 },
            "& .MuiFormControlLabel-root": { ml: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              size="medium"
              focused
              required
              id="outlined-required"
              label="Tên"
              name="Name"
              placeholder="Bạn tên là?"
              sx={{ fontStyle: "italic" }}
            />
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              onClick={handleClick}
            >
              {guestOf}
            </Button>
            <Menu
              id="guest-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  setGuestOf("Cô Dâu");
                  setEvent("Đến dự");
                  handleClose();
                }}
              >
                Cô Dâu
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setGuestOf("Chú Rể");
                  setEvent("Đến dự");
                  handleClose();
                }}
              >
                Chú Rể
              </MenuItem>
            </Menu>
          </div>
          {guestOf == "Cô Dâu" && (
            <div>
              <Button
                id="bride-button"
                aria-controls={open ? "bride-event-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                onClick={handleClick2}
              >
                {event}
              </Button>
              <Menu
                id="bride-event-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "bride-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setEvent("Lễ vu quy - Nhà cô dâu - 14:00 25/02/2023");
                    handleClose();
                  }}
                >
                  Lễ vu quy - Nhà cô dâu - 14:00 25/02/2023
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Bữa cơm thân mật - Nhà cô dâu");
                    handleClose();
                  }}
                >
                  Bữa cơm thân mật - Nhà cô dâu
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023");
                    handleClose();
                  }}
                >
                  Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023
                </MenuItem>
              </Menu>
            </div>
          )}
          {guestOf == "Chú Rể" && (
            <div>
              <Button
                id="groom-button"
                aria-controls={open ? "groom-event-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                onClick={handleClick2}
              >
                {event}
              </Button>
              <Menu
                id="groom-event-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "groom-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setEvent("Lễ thành hồn - Nhà chú rể - 15:00 25/02/2023");
                    handleClose();
                  }}
                >
                  Lễ thành hồn - Nhà chú rể - 15:00 25/02/2023
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023");
                    handleClose();
                  }}
                >
                  Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023
                </MenuItem>
              </Menu>
            </div>
          )}
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => {
                    setMoreGuest(!moreGuest);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Thêm người tham gia"
            />
            <div>
              {moreGuest && (
                <div>
                  <TextField
                    size="medium"
                    focused
                    required
                    id="outlined-required"
                    label="Số người"
                    name="Number"
                    placeholder="1,2,3"
                    sx={{ fontStyle: "italic" }}
                  />
                </div>
              )}
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  router.push("/confirmation");
                }}
              >
                Sẽ đến
              </Button>
              <Button sx={{ fontStyle: "italic" }}>Không thể đến</Button>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
