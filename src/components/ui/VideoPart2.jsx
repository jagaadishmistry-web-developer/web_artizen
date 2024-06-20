import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoPart2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <React.Fragment>
        <div className="bg-[url('/serBg.png')] bg-cover bg-center pb-16 lg:pb-0">
          <div className="container mx-auto px-7 grid lg:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-10 lg:gap-8 md:gap-12 gap-10">
            <div className="bg-[url('/videoBg.png')] bg-cover bg-center grid place-items-center 2xl:h-[600px] xl:h-[550px] md:h-[450px] h-60">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="asUN0c94xnY"
                onClose={() => setOpen(false)}
              />

              <button
                onClick={() => setOpen(true)}
                className="bg-[url('/videoBtn.png')] bg-cover bg-center xl:h-[75px] h-14 w-14 xl:w-[75px] hover:scale-110 duration-300"></button>
            </div>
            <div className="flex flex-col 2xl:gap-12 gap-8 text-white justify-center items-center text-center lg:items-start lg:text-start">
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold">
                Artificial Intelligence Is The New Big Thing In Technology
              </p>
              <button className="xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[130px] md:w-[145px] w-[130px] flex items-center justify-center rounded-full border border-white text-white hover:scale-110 duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default VideoPart2;
