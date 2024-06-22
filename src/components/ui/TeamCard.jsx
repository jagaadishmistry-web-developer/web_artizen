import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const TeamCard = ({ img, name, skills }) => {
  return (
    <>
      <div className="border-[3px] hover:border-[3px] border-transparent hover:border-[#5A12F6] duration-500">
        <Image
          src={img}
          className="2xl:h-[470px] w-full border-b-[2px]"
          alt="image"
        />
        <div className="flex flex-col items-center xl:py-10 py-6 text-white gap-1 bg-[#0C0E1A]">
          <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[22px] font-semibold">
            {name}
          </p>
          <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[14px] text-[14px]">
            {skills}
          </p>
          <div className="flex xl:pt-5 lg:pt-3 md:pt-4 py-3">
            <div className="group block">
              <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                <FaFacebookF className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
              </button>
            </div>
            <div className="group block">
              <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                <FaTwitter className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-lg group-hover:scale-110 duration-300" />
              </button>
            </div>
            <div className="group block">
              <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                <FaInstagram className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
