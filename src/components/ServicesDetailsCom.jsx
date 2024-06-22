import { ServicesTextData } from "@/utils/OurServicesData";
import { SortTeamData2 } from "@/utils/OurTeamData";
import Image from "next/image";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaRegCircleDot,
  FaTwitter,
} from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdArrowForwardIos, MdEmail } from "react-icons/md";

const ServicesDetailsCom = () => {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center">
        <div className="container mx-auto px-7 2xl:h-[500px] xl:h-[420px] lg:h-[320px] h-[300px] grid place-items-center">
          <div className="text-white flex flex-col xl:gap-5 gap-3 items-center">
            <div className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold">
              Services Details
            </div>
            <div className="flex items-center gap-3 2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[17px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#05000f] lg:to-black/0 to-[#5A12F6] px-2 py-1">
              <Link href={"/"} className="duration-300 hover:text-black">
                Home
              </Link>{" "}
              <span className="text-xl">
                <FaRegCircleDot />
              </span>{" "}
              <Link
                href={"/services"}
                className="duration-300 hover:text-black">
                Services
              </Link>{" "}
              <span className="text-xl">
                <FaRegCircleDot />
              </span>{" "}
              <span> Services Details</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-7 2xl:py-[95px] xl:py-[85px] lg:py-[65px] py-[65px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="lg:col-span-1 font-medium flex flex-col gap-4">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
              Our Services
            </p>
            <div className="flex flex-col xl:gap-3 lg:gap-2 gap-4">
              {ServicesTextData.map((stData) => {
                return (
                  <div
                    key={stData.id}
                    className="border border-[#5A12F6] flex justify-between px-4 2xl:py-[15px] xl:py-[13px] lg:py-[10px] md:py-[16px] py-[13px] items-center hover:bg-[#5A12F6] hover:text-white">
                    <div className="flex gap-2 items-center">
                      <div className="2xl:text-[18px] xl:text-[17px] lg:text-[13px] md:text-[18px] text-[14px]">
                        <GoDotFill />
                      </div>
                      <div className="">{stData.name}</div>
                    </div>
                    <div className="">
                      <MdArrowForwardIos />{" "}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Contact Info
              </p>
              <div className="flex gap-3">
                <div className="">
                  <FaLocationDot className="2xl:text-2xl xl:text-xl lg:text-lg md:text-2xl text-lg" />
                </div>
                <div className="2xl:text-[18px] xl:text-[17px] lg:text-[13px] md:text-[18px] text-[14px]">
                  80 Brooklyn Golden Street, New York. USA
                </div>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <BiSolidPhoneCall className="2xl:text-2xl xl:text-xl lg:text-lg md:text-2xl text-lg" />
                </div>
                <div className="2xl:text-[18px] xl:text-[17px] lg:text-[13px] md:text-[18px] text-[14px]">
                  +99 0123 456 0470
                </div>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <MdEmail className="2xl:text-2xl xl:text-xl lg:text-lg md:text-2xl text-lg" />
                </div>
                <div className="2xl:text-[18px] xl:text-[17px] lg:text-[13px] md:text-[18px] text-[14px]">
                  createuiuxlab@gmail.com
                </div>
              </div>
            </div>
            <div className="pt-6 flex flex-col gap-5 xl:text-[14px] lg:text-[12px] text-[14px]">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Get In Touch
              </p>
              <input
                type="text"
                className="w-full border xl:py-4 py-3 px-3"
                placeholder="Your Name :"
              />
              <input
                type="text"
                className="w-full border xl:py-4 py-3 px-3"
                placeholder="Your Email :"
              />
              <input
                type="text"
                className="w-full border xl:py-4 py-3 px-3"
                placeholder="Your Message :"
              />

              <button className="py-3 w-full bg-[#5A12F6] text-white">
                Submit
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-1">
            <Image
              src={"/servicesDetailsImg.png"}
              height={500}
              width={500}
              className="2xl:h-[620px] xl:h-[580px] lg:h-[470px] w-full"
              alt="image"
            />
            <p className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold xl:pt-7 pt-4">
              Data Analytics
            </p>
            <div className="flex flex-col gap-1 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
              <p>
                Our suite of AI-powered solutions can help streamline your
                operations and increase efficiency. A pre-built chatbot is a
                ready-made chatbot that can be easily deployed and customized
                for specific business needs without requiring extensive coding
                or development. Contrary to popular belief.
              </p>
              <p>
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                simply lock, a Latin professor at Hampden-Sydney looked up.
              </p>
            </div>
            <p className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold xl:pt-7 pt-4">
              How it works?
            </p>
            <p className="flex flex-col gap-1 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
              AI-powered solutions can help streamline your operations and
              increase efficiency. A pre-built chatbot is a ready-made chatbot
              that can be easily deployed and customized for specific business
              needs without requiring extensive coding or development.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-12 xl:pt-8 pt-5">
              <div className="col-span-1 flex flex-col gap-6">
                <div className="grid grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="col-span-1 2xl:h-[80px] xl:h-[65px] lg:h-[50px] md:h-[75px] h-[55px] 2xl:w-[80px] xl:w-[65px] lg:w-[65px] md:w-[75px] w-[55px] rounded-full bg-[#5A12F6] grid place-items-center">
                      <Image
                        src={"/di1.png"}
                        height={500}
                        width={500}
                        className="2xl:h-[40px] xl:h-[32px] lg:h-[25px] md:h-[40px] h-[20px] 2xl:w-[40px] xl:w-[32px] lg:w-[25px] md:w-[40px] w-[20px]"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[17px] font-medium">
                      Case Strategy
                    </p>
                    <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
                      A pre-built chatbot is a ready-made chatbot that can be
                      easily deployed and customized for specific business.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="col-span-1 2xl:h-[80px] xl:h-[65px] lg:h-[50px] md:h-[75px] h-[55px] 2xl:w-[80px] xl:w-[65px] lg:w-[65px] md:w-[75px] w-[55px] rounded-full bg-[#5A12F6] grid place-items-center">
                      <Image
                        src={"/di2.png"}
                        height={500}
                        width={500}
                        className="2xl:h-[40px] xl:h-[32px] lg:h-[25px] md:h-[40px] h-[20px] 2xl:w-[40px] xl:w-[32px] lg:w-[25px] md:w-[40px] w-[20px]"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[17px] font-medium">
                      Research
                    </p>
                    <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
                      A pre-built chatbot is a ready-made chatbot that can be
                      easily deployed and customized for specific business.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="col-span-1 2xl:h-[80px] xl:h-[65px] lg:h-[50px] md:h-[75px] h-[55px] 2xl:w-[80px] xl:w-[65px] lg:w-[65px] md:w-[75px] w-[55px] rounded-full bg-[#5A12F6] grid place-items-center">
                      <Image
                        src={"/di3.png"}
                        height={500}
                        width={500}
                        className="2xl:h-[40px] xl:h-[32px] lg:h-[25px] md:h-[40px] h-[20px] 2xl:w-[40px] xl:w-[32px] lg:w-[25px] md:w-[40px] w-[20px]"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[17px] font-medium">
                      Machine Learning
                    </p>
                    <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
                      A pre-built chatbot is a ready-made chatbot that can be
                      easily deployed and customized for specific business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  src={"/servicesDetailsImg2.png"}
                  height={500}
                  width={500}
                  className="w-full border-4 border-[#5A12F6]"
                  alt="image"
                />
              </div>
              <p className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold">
                Expert Team
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:pt-[60px] xl:pt-[50px] pt-[40px] gap-5">
              {SortTeamData2.slice(0, 3).map((sortTData) => {
                return (
                  <div
                    key={sortTData.id}
                    className="border-[3px] hover:border-[3px] border-transparent hover:border-[#5A12F6] duration-500">
                    <Image
                      src={sortTData.img}
                      className="w-full border-b-[2px]"
                      alt="image"
                    />
                    <div className="flex flex-col items-center 2xl:py-6 xl:py-4 lg:py-3 md:py-3 py-3 text-white gap-1 bg-[#0C0E1A]">
                      <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[22px] font-semibold">
                        {sortTData.name}
                      </p>
                      <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[14px] text-[14px]">
                        {sortTData.skills}
                      </p>
                      <div className="flex gap-3 xl:pt-4 lg:pt-3 md:pt-4 py-3">
                        <button className="2xl:h-[50px] xl:h-[45px] lg:h-[40px] md:h-[45px] h-[35px] 2xl:w-[50px] xl:w-[45px] lg:w-[40px] md:w-[45px] w-[35px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                          <FaFacebookF />
                        </button>
                        <button className="2xl:h-[50px] xl:h-[45px] lg:h-[40px] md:h-[45px] h-[35px] 2xl:w-[50px] xl:w-[45px] lg:w-[40px] md:w-[45px] w-[35px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                          <FaTwitter />
                        </button>
                        <button className="2xl:h-[50px] xl:h-[45px] lg:h-[40px] md:h-[45px] h-[35px] 2xl:w-[50px] xl:w-[45px] lg:w-[40px] md:w-[45px] w-[35px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                          <FaInstagram />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="xl:pt-20 lg:pt-16 pt-14 flex justify-between xl:text-[15px] lg:text-[13px] md:text-[14px] text-[12px] font-medium">
              <div className="flex gap-2 items-center hover:text-[#5A12F6] duration-300 cursor-pointer">
                <div className="">
                  <FaArrowLeft />
                </div>
                <div className="">Previous Service</div>
              </div>
              <div className="flex gap-2 items-center hover:text-[#5A12F6] duration-300 cursor-pointer">
                <div className="">Next Servicee</div>
                <div className="">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsCom;
