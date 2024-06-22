import { HowWeData } from "@/utils/HowWeData";
import Image from "next/image";
import Head2 from "./Head2";

const HowWeDataUi = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <Head2
          section="How We Do"
          sectionName="Artificial Intelligence"
          sectionName1="Professionals Services"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 pt-[70px] xl:gap-8 gap-10">
          {HowWeData.map((howData) => {
            return (
              <div
                key={howData.id}
                className="lg:flex shadow-lg border 2xl:px-8 xl:px-7 lg:px-6 md:px-10 px-5 2xl:py-8 lg:gap-4 py-4 hover:text-white hover:bg-[#5A12F6] group block">
                <div className="flex lg:flex-row flex-col items-center justify-center 2xl:gap-7 xl:gap-8 lg:gap-6 md:gap-7">
                  <Image
                    src={howData.img}
                    alt="image"
                    className="2xl:h-64 xl:h-52 lg:h-44 h-full w-full"
                  />

                  <div className="lg:pt-8 pt-5">
                    <p className="2xl:text-[28px] xl:text-[22px] lg:text-[19px] md:text-[22px] text-[20px] font-semibold">
                      {howData.name}
                    </p>
                    <p className="2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[15px] text-[13px] 2xl:pt-2">
                      {howData.dec}
                    </p>
                    <div className="w-full flex justify-end 2xl:pt-4 py-3 2xl:py-0">
                      <div className=" group-hover:bg-white px-[3px] rounded-full">
                        <Image src={howData.icon} alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HowWeDataUi;
