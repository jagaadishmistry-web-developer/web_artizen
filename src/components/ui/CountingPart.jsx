import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import count1 from "../../../public/count1.png";
import count2 from "../../../public/count2.png";
import count3 from "../../../public/count3.png";
import count4 from "../../../public/count4.png";

const CountingPart = () => {
  const [counting, setCounting] = useState(false);
  return (
    <>
      {/* =========== Counting Part Start ========== */}
      <ScrollTrigger
        onEnter={() => setCounting(true)}
        onExit={() => setCounting(false)}>
        <div className="bg-[#0C0E1A] text-white">
          <div className="container mx-auto px-7">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 place-items-center w-full 2xl:h-[270px] xl:h-[250px] lg:h-[200px] md:h-[380px] h-full md:py-0 py-16">
              <div className="h-full w-full flex md:items-center lg:justify-center">
                <div className="flex gap-5 items-center">
                  <Image src={count1} alt="image" />
                  <div className="">
                    <div className="2xl:text-[46px] xl:text-[42px] lg:text-[30px] md:text-[36px] text-[32px] font-semibold">
                      {counting && (
                        <CountUp start={0} end={200} duration={7} delay={0} />
                      )}{" "}
                      +
                    </div>
                    <div className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[24px] text-[24px]">
                      Happy Clientsimage
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:border-l border-[#2C2F3A] h-full w-full flex md:items-center lg:justify-center">
                <div className="flex gap-5 items-center">
                  <Image src={count2} alt="image" />
                  <div className="">
                    <div className="2xl:text-[46px] xl:text-[42px] lg:text-[30px] md:text-[36px] text-[32px]">
                      {counting && (
                        <CountUp start={0} end={30} duration={7} delay={0} />
                      )}{" "}
                      +
                    </div>
                    <div className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[24px] text-[24px]">
                      AI Awards
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:border-l lg:border-r border-[#2C2F3A] h-full w-full flex md:items-center lg:justify-center">
                <div className="flex gap-5 items-center">
                  <Image src={count3} alt="image" />
                  <div className="">
                    <div className="2xl:text-[46px] xl:text-[42px] lg:text-[30px] md:text-[36px] text-[32px]">
                      {counting && (
                        <CountUp start={0} end={180} duration={7} delay={0} />
                      )}{" "}
                      +
                    </div>
                    <div className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[24px] text-[24px]">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:h-full w-full flex md:items-center lg:justify-center">
                <div className="flex gap-5 items-center">
                  <Image src={count4} alt="image" />
                  <div className="">
                    <div className="2xl:text-[46px] xl:text-[42px] lg:text-[30px] md:text-[36px] text-[32px]">
                      {counting && (
                        <CountUp start={0} end={100} duration={7} delay={0} />
                      )}{" "}
                      +
                    </div>
                    <div className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[24px] text-[14px]">
                      Team Member
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      {/* =========== Counting Part End ========== */}
    </>
  );
};
export default CountingPart;
