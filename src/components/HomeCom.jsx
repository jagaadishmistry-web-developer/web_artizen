import Image from "next/image";
import CourseUi from "./ui/CourseUi";
import HowWeDataUi from "./ui/HowWeDataUi";
import CountingPart from "./ui/CountingPart";
import VideoPart from "./ui/VideoPart";
import IconPart from "./ui/IconPart";
import OurPricingUi from "./ui/OurPricingUi";
import OurSortTeam from "./ui/OurSortTeam";
import TestimonialsUi from "./ui/TestimonialsUi";
import OurbBlogUi from "./ui/OurbBlogUi";
import home2 from "../../public/home2.png";

const HomeCom = () => {
  return (
    <>
      {/*======= Home View Part ======= */}
      <div className="bg-[url('/homeImg.png')] lg:bg-cover lg:bg-center 2xl:h-[825px] xl:h-[680px] lg:h-[500px] md:h-[750px] h-[730px] flex lg:items-center lg:justify-start justify-center">
        <div className="container mx-auto px-7 text-center lg:text-start lg:mt-0 mt-20">
          <div className="text-white flex flex-col xl:gap-8 gap-6 lg:items-start items-center">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#05000f] lg:to-black/0 to-[#5A12F6] px-2 py-1 lg:w-[330px] md:w-[320px]">
              Welcome To Artizen.AI
            </p>
            <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-xl font-bold flex flex-col gap-[6px] lg:mt-0 mt-4">
              <p className="">
                Best Platform For{" "}
                <span className="text-[#5A12F6]">Robot Ai</span>
              </p>
              <p className="">Technology Products</p>
            </div>
            <p className="2xl:w-[576px] xl:w-[500px] lg:w-[420px] md:w-[500px] w-full xl:text-lg md:text-base text-sm">
              We develop effective plans to move your customers behavior's.
              customer can be always his profit.
            </p>
          </div>
          <div className="flex xl:gap-5 gap-3 xl:pt-[48px] lg:pt-[30px] pt-8 justify-center lg:justify-start">
            <button className="flex gap-1 bg-[#5A12F6] text-white rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
              Gat Started
            </button>
            <button className="flex gap-1 bg-white text-[#5A12F6] rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/*======= Home View Part End ======= */}
      <div className="container mx-auto px-7">
        <div className="grid lg:grid-cols-2 xl:py-[100px] py-[70px] place-content-center 2xl:gap-6 xl:gap-11 lg:gap-9 gap-20">
          <div className="col-span-1 flex items-center justify-center">
            <Image src={home2} alt="image" />
          </div>
          <div className="col-span-1 flex flex-col xl:gap-5 gap-3 items-center lg:items-start justify-center text-center lg:text-start">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#cbc0e1] lg:to-[#ffffff] to-[#5A12F6] px-2 py-1 xl:w-[445px]">
              Modern Intelligent Technology
            </p>
            <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
              <div>
                Get Solution! Using <span className="text-[#5A12F6]">AI</span>
              </div>
              <p className="text-[#5A12F6]">Artificial Intelligence</p>
            </div>
            <div className="xl:text-[16px] lg:text-[13px] md:text-[15px] text-[13px] 2xl:w-[520px] flex flex-col gap-[7px] lg:w-full md:w-[450px]">
              <p>
                Take your experience to a whole new level! Combine your talent
                as a designer with our software's agil. Adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="2xl:pt-2 lg:pt-0 mt-4">
              <button className="xl:h-[45px] lg:h-[37px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[120px] xl:text-base lg:text-sm flex items-center justify-center rounded-full border-2 border-[#5a12f6e5] text-[#5A12F6] hover:scale-110 duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <CourseUi />
      <HowWeDataUi />
      <CountingPart />
      <VideoPart />
      <IconPart />
      <OurPricingUi />
      <OurSortTeam />
      <TestimonialsUi />
      <OurbBlogUi />
    </>
  );
};

export default HomeCom;
