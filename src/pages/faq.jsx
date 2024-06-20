import FaqCom from "@/components/FaqCom";
import NavBar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";

const faq = () => {
  return (
    <>
      <div className="">
        <TopBar />
        <NavBar />
        <FaqCom />
      </div>
    </>
  );
};

export default faq;
