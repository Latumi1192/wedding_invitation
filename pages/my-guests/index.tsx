import { GuestData } from "@/features/domain/dto/GuestData";
import { UserServiceImpl } from "@/features/domain/services/UserServiceImpl";
import { Button, DividerClassKey, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const MyGuestsPage = () => {
  const userServ = new UserServiceImpl();
  const [guests, setGuests] = useState<GuestData[]>([]);

  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    fetchGuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGuests = async () => {
    const guests = await userServ.getGuests();
    console.log(guests);
    setGuests(guests);
  };

  const [form, setForm] = React.useState({
    account: "",
    password: "",
  });

  const [warning, setWarning] = React.useState("");
  const handleChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      {!logIn && (
        <div style={{ backgroundColor: "white" }}>
          <TextField
            focused
            required
            id="outlined-required"
            name="account"
            value={form.account}
            onChange={handleChange}
            placeholder="Account"
          />
          <TextField
            focused
            id="outlined-password-input"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <Button
            variant="contained"
            onClick={() => {
              if (
                form.account == "Honghai1192" ||
                form.password == "Honghai1192!"
              ) {
                setLogIn(true);
              } else {
                setWarning("Sai Password");
              }
            }}
          >
            Login
          </Button>
          <div style={{ backgroundColor: "black" }}>{warning}</div>
        </div>
      )}
      {logIn && (
        <div style={{ backgroundColor: "white" }}>
          <TextField /> <Button variant="contained">Filter</Button>
        </div>
      )}
      {logIn &&
        guests.map((guest) => (
          <div key={guest.uid}>
            <p>Tên: {guest.name}</p>
            <p>Khách của: {guest.guestOf}</p>
            <p>Đến dự: {guest.event}</p>
            <p>Thêm người: {guest.addedGuest}</p>
            <p>Thông tin thêm: {guest.notice}</p>
            -------
          </div>
        ))}
    </div>
  );
};

export default MyGuestsPage;
