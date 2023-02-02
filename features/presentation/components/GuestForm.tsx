import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Menu } from "@mui/material";
import PageBar from "./PageBar";

export default function GuestForm() {
  const [guestOf, setGender] = React.useState("Khách của");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          width: 550,
          border: 3,
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
            focused
            required
            id="outlined-required"
            label="Họ"
            name="Family Name"
            placeholder="Họ của bạn là?"
          />
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Tên"
            name="Name"
            placeholder="Bạn tên là?"
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
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                setGender("Cô Dâu");
                handleClose();
              }}
            >
              Cô Dâu
            </MenuItem>
            <MenuItem
              onClick={() => {
                setGender("Chú Rể");
                handleClose();
              }}
            >
              Chú Rể
            </MenuItem>
          </Menu>
        </div>
        <div>
          <TextField
            focused
            id="outlined-required"
            label="Lời chúc dành cho đôi bạn"
            name="abouthost"
            multiline
            rows={5}
            placeholder="Tell us about you"
          />
        </div>
        <div>
          <Button variant="contained">Sẽ đến</Button>
          <Button>Không thể đến</Button>
        </div>
      </Box>
    </Box>
  );
}
