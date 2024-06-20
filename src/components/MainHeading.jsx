import Link from "next/link";
import { FaRegCircleDot } from "react-icons/fa6";

const MainHeading = (props) => {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center">
        <div className="container mx-auto px-7 2xl:h-[500px] xl:h-[420px] lg:h-[320px] h-[300px] grid place-items-center">
          <div className="text-white flex flex-col xl:gap-5 gap-3 items-center">
            <div className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold">
              {props.title}
            </div>
            <div className="flex items-center gap-3 2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#05000f] lg:to-black/0 to-[#5A12F6] px-2 py-1">
              <Link href="/" className="duration-300 hover:text-black">
                Home
              </Link>
              <span className="text-xl">
                <FaRegCircleDot />
              </span>
              <span>{props.pageName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainHeading;
