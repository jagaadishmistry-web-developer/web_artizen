import MyAccount from "@/components/singUi/MyAccount";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const myAccount = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <MyAccount />
      </div>
    </>
  );
};
export default myAccount;
