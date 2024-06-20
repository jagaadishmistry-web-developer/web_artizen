import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

const TopBar = () => {
  return (
    <>
      <div className="lg:h-[40px] h-[75px] xl:text-[14px] lg:text-[12px] text-[9px] bg-[#5A12F6] text-white flex flex-col justify-center">
        <div className="container mx-auto px-7 flex justify-between">
          <div className="flex lg:flex-row flex-col lg:gap-4 gap-[3px] lg:items-center">
            <div className="flex gap-1">
              <span>
                <FaLocationDot className="lg:pt-1 lg:h-4 h-3 w-4" />
              </span>
              25 Willis Avenue, Usa, 069
            </div>
            <div className="flex gap-1">
              <span className="">
                <BiSolidPhoneCall className="lg:h-5 h-4 w-4" />
              </span>
              +99 0123 456 0470
            </div>
            <div className="flex gap-1">
              <span className="">
                <IoIosMail className="lg:h-5 h-4 w-5" />
              </span>
              createuiuxlab@gmail.com
            </div>
          </div>
          <div className="md:flex hidden">
            <div className="grid grid-cols-4 w-36">
              <div className="cols1 h-[38px] lg:border-l flex items-center justify-center">
                <FaFacebookF className="h-[16px] w-[18px]" />
              </div>
              <div className="cols1 h-[38px] lg:border-l flex items-center justify-center">
                <FaLinkedinIn className="h-[16px] w-[18px]" />
              </div>
              <div className="cols1 h-[38px] lg:border-l flex items-center justify-center">
                <FaInstagram className="h-[17px] w-[18px]" />
              </div>
              <div className="cols1 h-[38px] lg:border-l lg:border-r flex items-center justify-center">
                <FaTwitter className="h-[16px] w-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
