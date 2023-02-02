import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function PageBar() {
  const router = useRouter();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
          <Button
            sx={{ color: "white", display: "block" }}
            onClick={() => {
              router.push("/");
            }}
          >
            About us
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Photo
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Write something for us
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Contacts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
