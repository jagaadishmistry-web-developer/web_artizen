import Image from "next/image";
import home2img from "../../../public/home2img.png";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Home2IconData } from "@/utils/imageData";

const ModernTechnology = () => {
  const [counting, setCounting] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounting(true)}
        onExit={() => setCounting(false)}>
        <div className="container mx-auto px-7 xl:pb-[100px] pt-[0px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[60px]">
            <div className="col-span-1">
              <Image src={home2img} className="w-full" alt="image" />
            </div>
            <div className="col-span-1 flex lg:justify-start justify-center">
              <div className="flex flex-col xl:w-[620px] lg:w-full md:w-[500px]">
                <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-white lg:to-[#e9e7ec] to-[#5A12F6] px-2 py-1 lg:w-[410px] lg:text-start text-center">
                  Modern Intelligent Technology
                </p>
                <div className="">
                  <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-xl font-bold flex flex-col gap-[6px] 2xl:mt-6 mt-4 lg:text-start text-center">
                    <p className="">
                      Get Solution! Using{" "}
                      <span className="text-[#5A12F6]">Ai</span>
                    </p>
                    <p className="text-[#5A12F6]">Artificial Intelligence</p>
                  </div>
                  <p className="2xl:w-[576px] xl:w-[500px] lg:w-[420px] w-full xl:text-lg lg:text-sm md:text-base text-sm lg:text-start text-center 2xl:py-6 py-3">
                    Take your experience to a whole new level! Combine your
                    talent as a designer with our software's agil. Adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  {/* ------ Counting part-------  */}
                  <div className="">
                    <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-4 lg:gap-2 md:gap-10 gap-8 md:py-0 py-6">
                      {Home2IconData.map((h2Data) => {
                        return (
                          <div
                            key={h2Data.id}
                            className="h-full w-full flex md:items-center lg:justify-center">
                            <div className="grid grid-cols-8 2xl:gap-5 xl:gap-4 lg:gap-6 gap-7 items-center">
                              <Image
                                src={h2Data.img}
                                className="col-span-2 2xl:h-[70px] xl:h-[55px] lg:h-[40px] md:h-[45px] h-[50px] 2xl:w-[55px] xl:w-[50px] lg:w-[40px] md:w-[45px] w-[50px]"
                                alt="image"
                              />
                              <div className="col-span-6">
                                <div className="2xl:text-[46px] xl:text-[38px] lg:text-[27px] md:text-[36px] text-[32px] font-semibold text-[#5A12F6]">
                                  {counting && (
                                    <CountUp
                                      start={0}
                                      end={h2Data.num}
                                      duration={7}
                                      delay={0}
                                    />
                                  )}{" "}
                                  +
                                </div>
                                <div className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[24px] text-[24px]">
                                  {h2Data.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* ------------------ */}
                    <div className="flex justify-center lg:justify-start mb-16 2xl:mt-14 xl:mt-7 lg:mt-6 mt-8">
                      <button className="border xl:py-[9px] lg:py-[5px] md:py-[8px] py-[8px] xl:px-[32px] lg:px-[20px] md:px-[30px] px-[28px] rounded-full hover:scale-105 duration-300 border-[#5A12F6] text-[#5A12F6]">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default ModernTechnology;
