import PhotoSlide from "@/features/presentation/components/PhotoSlide";
import { Grid } from "@mui/material";
import React from "react";

const SignInPage = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.ibb.co/R6sH8vd/DSC00868.jpg)`,
    height: "1000px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle}>
      <PhotoSlide />
    </div>
  );
};

export default SignInPage;
