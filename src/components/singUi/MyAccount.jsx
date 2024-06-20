import Link from "next/link";
import {
  FaFacebookF,
  FaGoogle,
  FaRegCircleDot,
  FaTwitter,
} from "react-icons/fa6";

const MyAccount = () => {
  return (
    <>
      <div className="bg-[url('/singInBg.png')] bg-center bg-cover h-auto grid place-items-center">
        <div className="px-4 md:px-[50px] lg:px-[90px] xl:px-[170px] 2xl:px-[300px] md:py-[100px] py-[60px]">
          <div className="2xl:w-[630px] bg-white 2xl:px-[60px] xl:px-[55px] lg:px-[50px] md:px-[62px] px-[14px] flex md:gap-6 gap-4 flex-col text-center py-9">
            <div className="flex flex-col xl:gap-4 gap-3">
              <p className="2xl:text-[36px] xl:text-[32px] lg:text-[26px] md:text-[30px] text-[25px] font-medium">
                Create An Account!
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
              <input
                type="text"
                className="w-full md:py-4 py-3 px-3 border"
                placeholder="Password"
              />
              <input
                type="text"
                className="w-full md:py-4 py-3 px-3 border"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="w-full md:py-4 py-3 px-3 border"
                placeholder="Password"
              />
              <input
                type="text"
                className="w-full md:py-4 py-3 px-3 border"
                placeholder="Confim Passord"
              />
            </div>
            <div className="flex items-center gap-3 text-[16px] font-medium">
              <input type="checkbox" name="" id="" />I Agree Terms and
              Conditions.
            </div>
            <div className="lg:py-4 pb-6 lg:px-0 px-6">
              <button className="grid place-items-center rounded-full bg-[#5A12F6] text-white font-medium md:text-[16px] text-[14px] py-3 px-5">
                Register Account
              </button>
            </div>
            <div className="md:pb-3">
              <p className="font-medium text-start">Or Sing Up With</p>
              <div className="grid grid-cols-3 pt-5 lg:gap-14 md:gap-12 gap-3 text-white font-medium md:text-[15px] text-[11px]">
                <button className="bg-[#FF4C25] py-3 hover:scale-105 duration-300 flex items-center justify-center md:gap-2 gap-1">
                  <FaGoogle />
                  Google
                </button>
                <button className="bg-[#2A4ED2] md:py-3 py-2 hover:scale-105 duration-300 flex items-center justify-center md:gap-2 gap-1">
                  <FaFacebookF />
                  Facebook
                </button>
                <button className="bg-[#10D7FF] md:py-3 py-2 hover:scale-105 duration-300 flex items-center justify-center md:gap-2 gap-1">
                  <FaTwitter />
                  Twitter
                </button>
              </div>
            </div>
            <div className="lg:flex gap-1 pb-3">
              <Link href={"/myAccount"} className="font-medium">
                You have an account? Please,
              </Link>{" "}
              <Link href={""} className="text-[#5A12F6]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyAccount;
