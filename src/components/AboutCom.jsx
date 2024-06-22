import Image from "next/image";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import aboutImg from "../../public/aboutImg.png";
import aboutImg3 from "../../public/aboutImg3.png";
import MainHeading from "./MainHeading";
import ContactUi from "./ui/ContactUi";
import CountingPart from "./ui/CountingPart";
import CourseUi from "./ui/CourseUi";
import OurSortTeam from "./ui/OurSortTeam";
import VideoPart from "./ui/VideoPart";

const AboutCom = () => {
  return (
    <>
      <MainHeading title="About Us" pageName="About Us" />
      <div className="container mx-auto px-7 lg:py-0 py-[55px]">
        <div className="grid lg:grid-cols-2 xl:py-[100px] py-[70px] place-content-center xl:gap-16 lg:gap-10 md:gap-20 gap-16">
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src={aboutImg}
              height={500}
              width={500}
              className="2xl:h-[680px] xl:h-[580px] lg:h-[450px] w-full imageCustomize"
              priority
              alt="image1"
            />
          </div>
          <div className="col-span-1 flex flex-col xl:gap-5 lg:gap-3 gap-5 items-center lg:items-start justify-center text-center lg:text-start">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#cbc0e1] lg:to-[#e1cef5] to-[#5A12F6] px-2 py-1">
              About Us
            </p>
            <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
              <div>
                <span className="text-[#5A12F6]">AI</span>
                Is The New Big Thing In
              </div>
              <p className="text-[#5A12F6]">Technology</p>
            </div>
            <div className="flex flex-col xl:gap-3 lg:gap-2 gap-2 xl:text-[16px] lg:text-[13px] md:text-[15px] text-[13px] items-center lg:items-start">
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>Suscipit laborism nisi rut ailurid eum inure moil venial</p>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>Professional Consultancy Service</p>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>Custom Service & Operation</p>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>Advanced Advisory Team</p>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>24/7 Support Center</p>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <span className="text-[#5A12F6]">
                  <RiCheckboxMultipleLine />
                </span>{" "}
                <p>Boosting Operations</p>
              </div>
            </div>
            <div className="2xl:pt-4 xl:pt-3 pt-2">
              <button className="xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[130px] md:w-[145px] w-[120px] flex items-center justify-center rounded-full border-2 border-[#5a12f6e5] text-[#5A12F6] hover:scale-110 duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <CourseUi />
      <div className="container mx-auto px-7  600 lg:py-0 py-[85px]">
        <div className="grid lg:grid-cols-2 xl:h-[720px] lg:h-[520px] place-content-center xl:gap-16 lg:gap-10 md:gap-20 gap-16">
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
            <div className="xl:text-[16px] lg:text-[13px] md:text-[15px] text-[13px] 2xl:w-[520px] flex flex-col gap-[7px]">
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
            <div className="pt-4">
              <button className="xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[130px] md:w-[145px] w-[120px] flex items-center justify-center rounded-full border-2 border-[#5a12f6e5] text-[#5A12F6] hover:scale-110 duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* -------------  */}
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src={aboutImg3}
              height={600}
              width={600}
              className="2xl:h-[580px] xl:h-[430px] 2xl:w-[630px] xl:w-[500px] imageCustomize"
              priority
              alt="image1"
            />
          </div>
        </div>
      </div>
      {/* -----------------  */}
      <CountingPart />
      <VideoPart />
      <OurSortTeam />
      <ContactUi />
      {/* --------  */}
    </>
  );
};
export default AboutCom;
