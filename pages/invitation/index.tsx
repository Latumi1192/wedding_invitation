import GuestForm from "@/features/presentation/components/GuestForm";

const InvitaionPage = () => {
  const bgStyle = {
    backgroundImage: `url(https://i.imgur.com/ajVerF9.jpg)`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <GuestForm />
    </div>
  );
};

export default InvitaionPage;
