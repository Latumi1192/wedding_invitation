import { Button } from "@mui/material";
import router from "next/router";

const Home = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.ibb.co/R6sH8vd/DSC00868.jpg)`,
    height: "950px",
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
