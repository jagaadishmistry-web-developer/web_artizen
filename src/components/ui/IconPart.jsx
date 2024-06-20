import Image from "next/image";
import cIcon1 from "../../../public/cIcon1.png";
import cIcon2 from "../../../public/cIcon2.png";
import cIcon3 from "../../../public/cIcon3.png";
import cIcon4 from "../../../public/cIcon4.png";
import cIcon5 from "../../../public/cIcon5.png";
import cIcon6 from "../../../public/cIcon6.png";

const IconPart = () => {
  return (
    <>
      <div className="bg-[#0C0E1A] text-white lg:border-b lg:border-t border-[#5A12F6]">
        <div className="container mx-auto px-7 lg:py-0 py-14">
          <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:h-[200px] xl:h-[180px] lg:h-[200px] md:h-[250px] lg:gap-0 gap-10">
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r xl:border-l">
              <Image src={cIcon1} alt="" />
            </div>
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r">
              <Image src={cIcon2} alt="" />
            </div>
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r">
              <Image src={cIcon3} alt="" />
            </div>
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r">
              <Image src={cIcon4} alt="" />
            </div>
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r">
              <Image src={cIcon5} alt="" />
            </div>
            <div className="col-span-1 flex items-center justify-center border-[#5A12F6] lg:border-r">
              <Image src={cIcon6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IconPart;
