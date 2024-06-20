import MainHeading from "./MainHeading";
import CountingPart from "./ui/CountingPart";
import HowWeDataUi from "./ui/HowWeDataUi";
import OurServicesUi from "./ui/OurServicesUi";
import QuestionsPartUi from "./ui/QuestionsPartUi";
import ServicesTestimoniUi from "./ui/ServicesTestimoniUi";
import VideoPart2 from "./ui/VideoPart2";

const ServicesCom = () => {
  return (
    <>
      <MainHeading title="Services" pageName="Services" />
      <OurServicesUi />
      <CountingPart />
      <VideoPart2 />
      <QuestionsPartUi />
      <HowWeDataUi />
      <ServicesTestimoniUi />
    </>
  );
};
export default ServicesCom;
