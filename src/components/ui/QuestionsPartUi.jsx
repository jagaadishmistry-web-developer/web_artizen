import { QuestionData } from "@/utils/QuestionData";
import { useState } from "react";
import Question from "./Question";
import Link from "next/link";

const QuestionsPartUi = () => {
  const [seen, setSeen] = useState(QuestionData);

  return (
    <>
      <div className="bg-[#0C0E1A] pt-[105px] pb-[105px]">
        <div className="container mx-auto px-7">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-10 xl:gap-8 lg:gap-6 gap-14">
            <div className="">
              <div className="flex flex-col items-center xl:gap-6 lg:gap-3 gap-5 text-white">
                <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#514b62] lg:to-[#0C0E1A] to-[#5A12F6] px-2 py-1 text-center">
                  FAQ
                </p>
                <Link href={"/faq"}>
                  <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1 text-center">
                    <div className="">Frequently Asked</div>
                    <div className="">Questions</div>
                  </div>
                </Link>
              </div>
              {/* --------- question part start  -----------  */}
              <div className="xl:h-12 text-white"></div>
              {seen.map((qqData) => {
                return <Question key={qqData.id} {...qqData} />;
              })}
            </div>
            {/* --------- question part End -----------  */}
            <div className="flex flex-col 2xl:gap-10 xl:gap-9 lg:gap-6 gap-8 xl:text-[16px] lg:text-[13px] md:text-[15px] text-[13px] 2xl:h-[780px] xl:h-[700px] lg:h-[550px]">
              <div className="h-full w-full bg-white grid place-items-center gap-3 2xl:px-12 xl:px-10 lg:px-6 px-4 xl:py-8 lg:py-5 py-7">
                <div className="flex flex-col items-center xl:gap-6 lg:gap-3 gap-5">
                  <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold">
                    Need Any Help!
                  </p>
                  <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-600 text-center 2xl:w-[420px] xl:w-[400px] lg:w-[300px] md:w-[420px]">
                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2"
                />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2"
                />
                <textarea
                  type="text"
                  placeholder="Your Subject"
                  className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2 2xl:h-[180px] xl:h-[120px] lg:h-[140px] h-[100px]"
                />

                <div className="pt-3 flex lg:justify-start justify-center w-full">
                  <button className="flex bg-[#5A12F6] text-white rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionsPartUi;
