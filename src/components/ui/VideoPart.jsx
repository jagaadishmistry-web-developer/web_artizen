import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const VideoPart = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="asUN0c94xnY"
        onClose={() => setOpen(false)}
      />
      {/* video  */}
      <div className="bg-[url('/countBg.png')] bg-cover bg-center md:py-0 py-14">
        <div className="container mx-auto px-7 text-white">
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:h-[600px]">
            <div className="items-end md:flex hidden">
              <Image
                src={"/countImg.png"}
                height={500}
                width={500}
                className="2xl:h-[560px] 2xl:w-[600px]"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center md:h-full h-[200px] w-full">
              <button
                onClick={() => setOpen(true)}
                className="bg-[url('/videoBtn.png')] bg-cover bg-center xl:h-[75px] h-14 w-14 xl:w-[75px] hover:scale-110 duration-300"></button>
            </div>
          </div>
        </div>
      </div>
      {/* video end  */}
    </>
  );
};
export default VideoPart;
