import Link from "next/link";
import { FaRegCircleDot } from "react-icons/fa6";

const ForgetPasswordUi = () => {
  return (
    <>
      <div className="bg-[url('/singInBg.png')] bg-center bg-cover h-auto grid place-items-center">
        <div className="px-4 md:px-[50px] lg:px-[90px] xl:px-[170px] 2xl:px-[300px] md:py-[100px] py-[60px]">
          <div className="2xl:w-[630px] bg-white 2xl:px-[60px] xl:px-[55px] lg:px-[50px] md:px-[62px] px-[14px] flex md:gap-6 gap-4 flex-col text-center py-9">
            <div className="flex flex-col xl:gap-4 gap-3">
              <p className="2xl:text-[36px] xl:text-[32px] lg:text-[26px] md:text-[30px] text-[25px] font-medium">
                Forget Password
              </p>
              <p className="2xl:Text-[16px] xl:Text-[15px] md:Text-[14px] md:Text-[15px] Text-[13px]">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <input
                type="text"
                className="w-full md:py-4 py-3 px-3 border"
                placeholder="Email Address"
              />
            </div>
            <div className="lg:py-4 pb-6">
              <button className="md:h-[45px] h-[40px] px-5 grid place-items-center rounded-full bg-[#5A12F6] text-white font-medium md:text-[16px] text-[14px]">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPasswordUi;
