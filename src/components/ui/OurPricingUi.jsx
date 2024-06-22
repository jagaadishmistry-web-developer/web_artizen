import { PriceData } from "@/utils/OurPriceData";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

const OurPricingUi = () => {
  return (
    <>
      <div className="bg-[#0C0E1A] text-white py-[100px]">
        <div className="container mx-auto px-7">
          <div className="flex flex-col items-center gap-6">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#0f0232] lg:to-[#0C0E1A] to-[#5A12F6] px-2 py-1 w-[180px] text-center">
              Our Pricing
            </p>
            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
              Our Pricing Plan
            </p>
          </div>
          <div className="2xl:mt-[70px] mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {PriceData.map((priceData) => {
              return (
                <Link href={"/priceingPlan"} key={priceData.id}>
                  <div className="w-full border hover:border-[#5A12F6] hover:shadow-xl hover:shadow-[#5a12f645] group block px-4 2xl:px-12 xl:px-8 lg:px-7 md:px-8 2xl:py-10 xl:py-8 md:py-8 py-10">
                    <div className="flex flex-col 2xl:gap-3 xl:gap-2 lg:gap-1 md:gap-2 gap-1 items-center justify-center h-full text-center">
                      <p className="2xl:text-[28px] xl:text-[27px] lg:text-[20px] md:text-[24px] text-[20px] font-semibold">
                        {priceData.name}
                      </p>
                      <p className="xl:text-[15px] lg:text-[13px] md:text-[14px] text-[13px] 2xl:w-[270px] xl:w-[250px]">
                        AI-powered solutions can help streamline your operations
                      </p>
                      <div className="2xl:py-5 xl:py-4 lg:py-3 md:py-4 py-3 w-full">
                        <div className="bg-white 2xl:h-[60px] xl:h-[55px] lg:h-[40px] md:h-[55px] h-[40px] flex items-center justify-center gap-1 text-black">
                          <span className="font-bold 2xl:text-[27px] xl:text-[25px] lg:text-[18px] md:text-[22px] text-[18px]">
                            {priceData.price}
                          </span>{" "}
                          <span className="xl:pt-2 pt-1 xl:text-[15px] lg:text-[14px] md:text-[14px] text-[13px]">
                            Per Month
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col xl:gap-4 lg:gap-1 md:gap-2 gap-1 xl:text-[15px] lg:text-[13px] md:text-[14px] text-[13px]">
                        <div className="flex gap-3 items-center">
                          <span>
                            <IoCheckmarkCircle />
                          </span>{" "}
                          <span>Log in Via Social Media</span>
                        </div>
                        <div className="">
                          <div className="flex gap-3 items-center">
                            <span>
                              <IoCheckmarkCircle />
                            </span>{" "}
                            <span>Life Chat & Email</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex gap-3 items-center">
                            <span>
                              <IoCheckmarkCircle />
                            </span>{" "}
                            <span>Basic Help Center</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex gap-3 items-center">
                            <span>
                              <IoCheckmarkCircle />
                            </span>{" "}
                            <span>Social Interation</span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex gap-3 items-center">
                            <span>
                              <IoCheckmarkCircle />
                            </span>{" "}
                            <span>Hotline Supports 24/7</span>
                          </div>
                        </div>
                      </div>
                      <div className="2xl:pt-6 xl:pt-5 lg:pt-4 md:pt-5 pt-6">
                        <button className="border xl:py-[10px] lg:py-[8px] md:py-[9px] py-[8px] xl:px-[32px] lg:px-[28px] md:px-[30px] px-[28px] rounded-full hover:scale-105 duration-300 group-hover:bg-[#5A12F6] group-hover:border-[#5A12F6]">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurPricingUi;
