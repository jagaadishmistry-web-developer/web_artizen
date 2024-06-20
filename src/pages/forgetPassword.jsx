import ForgetPasswordUi from "@/components/singUi/ForgetPasswordUi";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const forgetPassword = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <ForgetPasswordUi />
      </div>
    </>
  );
};
export default forgetPassword;
