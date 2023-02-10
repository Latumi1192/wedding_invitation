import PhotoSlide from "@/features/presentation/components/PhotoSlide";
import { Grid } from "@mui/material";
import React from "react";

const SignInPage = () => {
  const bgStyle = {
    backgroundImage: `none`,
    height: "1000px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <PhotoSlide />
    </div>
  );
};

export default SignInPage;
