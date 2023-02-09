import Timelines from "@/features/presentation/components/Timelines";
import React from "react";

const TimelinePage = () => {
  const bgStyle = {
    backgroundColor: "white",
  };
  return (
    <div style={bgStyle}>
      <Timelines />
    </div>
  );
};

export default TimelinePage;
