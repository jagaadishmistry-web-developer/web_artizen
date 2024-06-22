import Link from "next/link";
import { FaRegCircleDot } from "react-icons/fa6";
import OurPricingUi from "./ui/OurPricingUi";
import OurSortTeam from "./ui/OurSortTeam";
import IconPart from "./ui/IconPart";
import QuestionsPartUi from "./ui/QuestionsPartUi";

const PriceingPlanCom = () => {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center">
        <div className="px-4 md:px-[50px] lg:px-[90px] xl:px-[170px] 2xl:px-[300px] 2xl:h-[500px] xl:h-[420px] lg:h-[320px] h-[300px] grid place-items-center">
          <div className="text-white flex flex-col xl:gap-5 gap-3 items-center">
            <div className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold">
              Team
            </div>
            <div className="flex items-center gap-3 2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#05000f] lg:to-black/0 to-[#5A12F6] px-2 py-1">
              <Link href={"/"} className="duration-300 hover:text-black">
                Home
              </Link>{" "}
              <span className="text-xl">
                <FaRegCircleDot />
              </span>{" "}
              <span>Team</span>
            </div>
          </div>
        </div>
      </div>
      <OurPricingUi />
      <OurSortTeam />
      <IconPart />
      <QuestionsPartUi />
    </>
  );
};
export default PriceingPlanCom;
