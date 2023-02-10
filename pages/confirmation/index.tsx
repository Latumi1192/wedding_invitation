import Confirmation from "@/features/presentation/components/Confirmation";
import React from "react";

const ConfirmationPage = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.imgur.com/ajVerF9.jpg)`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <Confirmation />
    </div>
  );
};

export default ConfirmationPage;
