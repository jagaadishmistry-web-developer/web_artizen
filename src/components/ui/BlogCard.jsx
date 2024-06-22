import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ img, name, description }) => {
  return (
    <>
      <div className="2xl:h-[632px] xl:h-[580px] lg:h-[460px] md:h-[550px] h-[470px] group block">
        <div className="relative">
          <div className="absolute flex gap-1 items-center bg-[#5A12F6] text-white px-2 py-1 xl:text-[15px] text-[13px] 2xl:top-6 xl:top-4 lg:top-3 md:top-3 top-2 2xl:left-6 xl:left-4 lg:left-3 md:left-3 left-2">
            <span>
              <CgCalendarDates />
            </span>
            <span>15 Jun 2023</span>
          </div>
          <Image src={img} alt="image" className="w-full" />
        </div>
        <div className="relative text-white">
          <div className="absolute -top-10 2xl:left-8 xl:left-6 lg:left-4 md:left-5 left-4 2xl:right-8 xl:right-6 lg:right-4 md:right-5 right-4 bg-[#0C0E1A]">
            <div className="2xl:px-9 xl:px-6 lg:px-4 md:px-5 px-4 2xl:py-9 xl:py-7 lg:py-4 md:py-5 py-4 flex flex-col 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-3 gap-3 justify-center h-full">
              <div className="flex gap-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px]">
                <span className="group-hover:text-[#5A12F6]">
                  <FaRegUser />
                </span>
                <span>By Admin:</span>
                <span className="group-hover:text-[#5A12F6]">Jhara</span>
              </div>
              <p className="group-hover:text-[#5A12F6] 2xl:text-[22px] xl:text-[19px] lg:text-[16px] md:text-[19px] text-[17px] font-semibold">
                {name}
              </p>
              <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px]">
                {description}
              </p>
              <div className="pt-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px]">
                <button className="hover:scale-105 duration-300 group-hover:border-[#5A12F6] group-hover:bg-[#5A12F6] flex items-center gap-2 2xl:px-10 xl:px-8 lg:px-6 md:px-7 px-7 xl:py-2 lg:py-[6px] md:py-[7px] py-[6px] border rounded-full">
                  <span>Learn More</span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
