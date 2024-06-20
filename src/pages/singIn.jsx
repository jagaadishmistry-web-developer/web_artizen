import SingInUi from "@/components/singUi/SingInUi";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const singIn = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <SingInUi />
      </div>
    </>
  );
};

export default singIn;
