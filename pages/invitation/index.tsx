import GuestForm from "@/features/presentation/components/GuestForm";

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
      <GuestForm />
    </div>
  );
};

export default Home;
