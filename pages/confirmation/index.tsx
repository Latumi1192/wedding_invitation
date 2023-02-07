import Confirmation from "@/features/presentation/components/Confirmation";
import React from "react";

const ConfirmationPage = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.ibb.co/R6sH8vd/DSC00868.jpg)`,
    height: "950px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={bgStyle}>
      <Confirmation />
    </div>
  );
};

export default ConfirmationPage;
