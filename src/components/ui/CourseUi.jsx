import { CouresData } from "@/utils/CourseData";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const CourseUi = () => {
  return (
    <>
      <div className="bg-[#0C0E1A]">
        <div className="container mx-auto px-7">
          <div className="py-[100px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {CouresData.map((cData) => {
              return (
                <div
                  key={cData.id}
                  className="xl:py-10 py-8 bg-white hover:bg-[#5A12F6] hover:text-white xl:px-12 lg:px-6 md:px-6 px-6 group block">
                  <div className="flex flex-col gap-3 h-full items-center justify-center text-center">
                    <div className="2xl:h-[80px] xl:h-[70px] lg:h-[50px] md:h-[60px] h-[50px] 2xl:w-[80px] xl:w-[70px] lg:w-[50px] md:w-[60px] w-[50px] grid place-items-center rounded-full xl:border-[4px] lg:border-[3px] md:border-[3px] border-[2px] border-[rgba(90,18,246,0.76)] group-hover:bg-white">
                      <Image src={cData.img} alt="" />
                    </div>
                    <p className="xl:text-[22px] lg:text-[19px] md:text-[20px] text-[18px] font-bold">
                      {cData.name}
                    </p>
                    <p className="xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px]">
                      {cData.dec}
                    </p>
                    <div className="xl:mt-4 mt-1">
                      <button className="flex gap-1 items-center xl:text-[15px] lg:text-[13px] md:text-[14px] text-[13px] font-medium">
                        Learn More{" "}
                        <span className="mt-[3px]">
                          <HiArrowNarrowRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseUi;
