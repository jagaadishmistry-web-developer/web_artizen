import { ServicesData } from "@/utils/OurServicesData";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import CountingPart from "./CountingPart";
import Link from "next/link";
import Head2 from "./Head2";

const OurServicesUi = () => {
  return (
    <>
      <div className="container mx-auto px-7 xl:py-[100px] py-[70px]">
        <Head2
          section="Our Services"
          sectionName="Artificial Intelligence"
          sectionName1="Powered Solutions"
        />

        {/* --------  */}
        <div className="pt-[70px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {ServicesData.map((sData) => {
              return (
                <Link key={sData.id} href={"/servicesDetails"}>
                  <div className="group block">
                    <div className="">
                      <Image src={sData.img} alt="" className="w-full" />
                    </div>
                    <div className="border border-[#5A12F6] 2xl:px-6 xl:px-5 lg:px-3 md:px-5 px-3 2xl:py-7 xl:py-6 lg:py-4 md:py-6 py-4 flex flex-col 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-4 gap-3">
                      <p className="2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[22px] text-[18px] font-semibold group-hover:text-[#5A12F6]">
                        {sData.name}
                      </p>
                      <p className="2xl:text-[15px] xl:text-[14px] lg:text-[12px] md:text-[15px] text-[14px]">
                        {sData.description}
                      </p>
                      <div className="flex justify-between">
                        <button className="group-hover:text-[#5A12F6] flex gap-1 items-center xl:text-[15px] lg:text-[13px] md:text-[14px] text-[13px] font-medium">
                          Learn More{" "}
                          <span className="mt-[3px]">
                            <HiArrowNarrowRight />
                          </span>
                        </button>
                        <Image
                          src={sData.logo}
                          height={500}
                          width={500}
                          className="2xl:h-[30px] xl:h-[22px] lg:h-[16px] md:h-[28px] h-[20px] 2xl:w-[30px] xl:w-[22px] lg:w-[16px] md:w-[28px] w-[20px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* --------  */}
    </>
  );
};
export default OurServicesUi;
