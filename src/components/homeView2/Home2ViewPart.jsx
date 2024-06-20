import { imageSlide } from "@/utils/imageData";
import { useEffect, useState } from "react";
import Home2NavBar from "./Home2NavBar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Home2ViewPart = () => {
  const [CurrentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (CurrentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(CurrentState + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [CurrentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[CurrentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  const goToText = (CurrentState) => {
    setCurrentState(CurrentState);
  };
  return (
    <>
      <div className="">
        <div style={bgImageStyle} className="duration-700">
          <Home2NavBar />
          <div className="container mx-auto px-7 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-16">
            <div className=""></div>
            <div className="lg:flex gap-14 justify-end items-center">
              <div className="2xl:h-[850px] xl:h-[700px] h-[670px] flex flex-col lg:items-end items-center lg:justify-center gap-5 text-white">
                <div className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#2c0287]  lg:to-[#0e0b25] to-[#5A12F6] px-4 py-1 text-center">
                  welcome To Artizen.AI
                </div>
                <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold lg:text-end text-center flex flex-col gap-3">
                  <p>The World's Best Solution</p>
                  <p className="bg-gradient-to-t to-[#5A12F6] from-white text-transparent pb-2 bg-clip-text">
                    Ai Technology
                  </p>
                </div>
                <p className="xl:w-[560px] lg:w-[400px]  md:w-[460px] lg:text-end text-center">
                  We develop effective plans to move your customers behavior's.
                  customer can be always his profit. Take your experience to a
                  whole new level! Combine your talent as a designer with our
                  software.
                </p>
                <div className="flex xl:gap-5 gap-3 justify-center lg:justify-start">
                  <button className="flex gap-1 bg-[#5A12F6] text-white rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
                    Gat Started
                  </button>
                  <button className="flex gap-1 bg-white text-[#5A12F6] rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
                    Contact Us
                  </button>
                </div>
                <div className="flex gap-4 lg:pt-7 pt-4">
                  <div className="">
                    <FaFacebook />
                  </div>
                  <div className="">
                    <FaInstagram />
                  </div>
                  <div className="">
                    <FaLinkedin />
                  </div>
                  <div className="">
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div className="mb-16 lg:mb-0">
                <div className="cursor-pointer flex lg:flex-col gap-3 items-center justify-center h-full">
                  {imageSlide.map((imageSlide, CurrentState) => (
                    <span
                      className="lg:h-16 lg:w-1 w-10 h-1 bg-white rounded-3xl"
                      key={CurrentState}
                      onClick={() => goToText(CurrentState)}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2ViewPart;
