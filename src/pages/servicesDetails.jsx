import ServicesDetailsCom from "@/components/ServicesDetailsCom";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const servicesDetails = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <ServicesDetailsCom />
      </div>
    </>
  );
};

export default servicesDetails;
