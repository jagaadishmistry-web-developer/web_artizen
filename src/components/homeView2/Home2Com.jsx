import { BlogData } from "@/utils/BlogData";
import Image from "next/image";
import Link from "next/link";
import { CgCalendarDates } from "react-icons/cg";
import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";
import userIcon from "../../../public/userIcon.png";
import ContactUi from "../ui/ContactUi";
import HowWeDataUi from "../ui/HowWeDataUi";
import OurServicesUi from "../ui/OurServicesUi";
import QuestionsPartUi from "../ui/QuestionsPartUi";
import VideoPart2 from "../ui/VideoPart2";
import Home2ViewPart from "./Home2ViewPart";
import ModernTechnology from "./ModernTechnology";

const Home2Com = () => {
  return (
    <>
      <Home2ViewPart />
      <HowWeDataUi />
      <ModernTechnology />
      <VideoPart2 />
      <OurServicesUi />
      <QuestionsPartUi />
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <div className="flex flex-col items-center gap-6">
          <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-white lg:to-[#e9e7ec] to-[#5A12F6] px-2 py-1 w-[180px] text-center">
            Our Blog
          </p>
          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1 text-center">
            <p>Latest News's And Posts </p>
          </div>
        </div>
        {/* Blog Card  */}
        <div className="xl:pt-[80px] lg:pt-[70px] md:pt-[50px] pt-[50px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {BlogData.slice(0, 3).map((blData) => {
              return (
                <Link href={"/blog"} key={blData.id}>
                  <div className="group block">
                    <div className="relative">
                      <Image src={blData.img} className="w-full" alt="" />
                      <div className="absolute flex gap-1 bg-[#5A12F6] text-white px-2 py-1 xl:text-[15px] text-[13px] bottom-4 xl:left-8 left-3">
                        <span>
                          <CgCalendarDates />
                        </span>
                        <span>15 Jun 2023</span>
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="bg-[#0C0E1A] py-3">
                        <div className="xl:px-9 lg:px-4 md:px-5 px-4 2xl:py-9 xl:py-7 lg:py-4 md:py-5 py-4 flex flex-col 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-3 gap-3 justify-center h-full">
                          <div className="flex gap-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px]">
                            <span className="group-hover:text-[#5A12F6]">
                              <FaRegUser />
                            </span>
                            <span>By Admin:</span>
                            <span className="group-hover:text-[#5A12F6]">
                              Jhara
                            </span>
                          </div>
                          <p className="group-hover:text-[#5A12F6] 2xl:text-[22px] xl:text-[19px] lg:text-[16px] md:text-[19px] text-[17px] font-semibold">
                            {blData.name}
                          </p>
                          <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px]">
                            {blData.description}
                          </p>
                          <div className="pt-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px] flex justify-between items-center">
                            <button className="hover:scale-105 duration-300 group-hover:border-[#5A12F6] group-hover:bg-[#5A12F6] flex items-center gap-2 2xl:px-10 xl:px-8 lg:px-5 md:px-7 px-4 xl:py-3 lg:py-[8px] md:py-3 py-2 border rounded-full">
                              <span>Learn More</span>
                              <span>
                                <FaArrowRightLong />
                              </span>
                            </button>
                            <Image src={userIcon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <ContactUi />
    </>
  );
};

export default Home2Com;
