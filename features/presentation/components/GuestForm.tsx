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
  Alert,
  AlertTitle,
} from "@mui/material";
import PageBar from "./PageBar";
import "@fontsource/itim";
import { useRouter } from "next/router";
import { GuestData } from "@/features/domain/dto/GuestData";
import { UserServiceImpl } from "@/features/domain/services/UserServiceImpl";
import { send } from "emailjs-com";

export default function GuestForm() {
  const router = useRouter();
  const userServ = new UserServiceImpl();
  const [guestOf, setGuestOf] = React.useState("Khách của");
  const [moreGuest, setMoreGuest] = React.useState(false);
  const [event, setEvent] = React.useState("Đến dự");
  const [eventNumber, setEventNumber] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [guestData, setGuestData] = React.useState<GuestData>({
    name: "",
    guestOf: "",
    event: 0,
    addedGuest: 0,
    notice: "",
    email: "",
    uid: 0,
  });

  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const [warning, setWarning] = React.useState("");

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setGuestData({
      ...guestData,
      [event.target.name]: event.target.value,
    });
  };

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
        //light: "#b2dfdb",
        light: "#abbdce",
        //main: "#5F8575",
        main: "#5b799e",
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
            width: 4 / 5,
            backgroundColor: "primary.light",
            borderColor: "primary.main",
            borderRadius: "16px",
            "& .MuiTextField-root": { m: 2, maxWidth: "95%" },
            "& .MuiButton-root": { mt: 1, ml: 2, mb: 1, mr: 2 },
            "& .MuiTypography-root": { ml: 2, mb: 0 },
            "& .MuiFormGroup-root": { mt: 0, ml: 1 },
            "& .MuiFormControlLabel-root": { ml: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          {warning != "" && (
            <div>
              <Alert
                severity="error"
                sx={{
                  borderRadius: "16px 16px 0px 0px",
                }}
              >
                <AlertTitle>Error</AlertTitle>
                <strong>{warning}</strong>
              </Alert>
            </div>
          )}
          <div>
            <TextField
              size="medium"
              focused
              required
              id="outlined-required"
              label="Tên"
              name="name"
              onChange={handleChange}
              value={guestData.name}
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
                    setEvent(
                      "Bữa trưa thân mật - Nhà cô dâu - 11:00 25/02/2023"
                    );
                    setEventNumber(1);
                    handleClose();
                  }}
                >
                  Bữa cơm thân mật - Nhà cô dâu - 11:00 25/02/2023
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Lễ vu quy - Nhà cô dâu - 14:00 25/02/2023");
                    setEventNumber(2);
                    handleClose();
                  }}
                >
                  Lễ vu quy - Nhà cô dâu - 14:00 25/02/2023
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023");
                    setEventNumber(3);
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
                    setEvent("Lễ thành hôn - Nhà chú rể - 15:00 25/02/2023");
                    setEventNumber(4);
                    handleClose();
                  }}
                >
                  Lễ thành hồn - Nhà chú rể - 15:00 25/02/2023
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEvent("Tiệc cưới - Nhà hàng Long Vĩ - 17:30 25/02/2023");
                    setEventNumber(3);
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
                    name="addedGuest"
                    value={guestData.addedGuest}
                    onChange={handleChange}
                    placeholder="1,2,3"
                    sx={{ fontStyle: "italic" }}
                  />
                </div>
              )}
            </div>
            <TextField
              size="medium"
              focused
              required
              id="outlined-required"
              label="Email"
              name="email"
              onChange={handleChange}
              value={guestData.email}
              placeholder="Email của bạn"
              sx={{ fontStyle: "italic" }}
            />
            <TextField
              focused
              multiline
              style={{ margin: 8 }}
              label="Lời chúc"
              name="notice"
              value={guestData.notice}
              onChange={handleChange}
              rows={4}
              placeholder="Gửi lời chúc đến cô dâu và chú rể..."
              fullWidth
            />
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  guestData.event = eventNumber;
                  guestData.guestOf = guestOf;
                  if (userServ.checkGuestData(guestData) !== "")
                    setWarning(userServ.checkGuestData(guestData));
                  else {
                    console.log(guestData);
                    const message = userServ.generateMessageConfirm(
                      guestData.event
                    );
                    console.log(message);

                    toSend.from_name = "Thủy và Hải";
                    toSend.to_name = guestData.name;
                    toSend.reply_to = guestData.email;
                    toSend.message = message;
                    console.log(toSend);
                    send(
                      "service_75tieyf",
                      "template_t2ik7ms",
                      toSend,
                      "5K6nf78Igqwqjjosu"
                    )
                      .then((response) => {
                        console.log("SUCCESS!", response.status, response.text);
                      })
                      .catch((err) => {
                        console.log("FAILED...", err);
                      });
                    userServ.creatGuestData(guestData);
                    router.push("/confirmation");
                  }
                }}
              >
                Sẽ đến
              </Button>
              <Button
                sx={{ fontStyle: "italic" }}
                onClick={() => {
                  guestData.event = 5;
                  guestData.guestOf = "Không đến";
                  if (userServ.checkGuestData(guestData) !== "")
                    setWarning(userServ.checkGuestData(guestData));
                  else {
                    console.log(guestData);
                    const message = userServ.generateMessageDeny();
                    console.log(message);
                    toSend.from_name = "Thủy và Hải";
                    toSend.to_name = guestData.name;
                    toSend.reply_to = guestData.email;
                    toSend.message = message;
                    console.log(toSend);
                    send(
                      "service_75tieyf",
                      "template_t2ik7ms",
                      toSend,
                      "5K6nf78Igqwqjjosu"
                    )
                      .then((response) => {
                        console.log("SUCCESS!", response.status, response.text);
                      })
                      .catch((err) => {
                        console.log("FAILED...", err);
                      });
                    userServ.creatGuestData(guestData);
                    router.push("/aboutus");
                  }
                }}
              >
                Không thể đến
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
