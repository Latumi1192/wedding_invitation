import Timelines from "@/features/presentation/components/Timelines";
import React from "react";

const TimelinePage = () => {
  const bgStyle = {
    backgroundColor: "#abbdce",
  };
  return (
    <div style={bgStyle}>
      <Timelines />
    </div>
  );
};

export default TimelinePage;
