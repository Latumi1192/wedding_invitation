import { Button } from "@mui/material";
import router from "next/router";

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.imgur.com/A5wK8RA.gif)`,
    height: "930px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle}>
      <Button
        onClick={() => {
          router.push("/invitation");
        }}
      >
        Tham dự
      </Button>
    </div>
  );
};

export default Home;
