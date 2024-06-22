import Image from "next/image";
import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiMove } from "react-icons/fi";

const ImageModel = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModle = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseMolde = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && (
        <div className="sliderWrap">
          <div className="">
            <FaRegCircleXmark
              className="text-white"
              onClick={handleCloseMolde}
            />
            <Image
              src={galleryImages[slideNumber].img}
              alt="image"
              height={500}
              width={500}
            />
          </div>
        </div>
      )}
      {/* image  */}
      <div className="grid lg:gap-5 gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 font-serif xl:pt-[120px] xl:pb-10 pt-[60px] relative">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-xl items-center justify-center overflow-hidden cursor-pointer">
                <div className="">
                  <Image
                    className="h-full w-full object-cover group-hover:duration-[600ms] group-hover:scale-110 transition-transform"
                    src={slide.img}
                    alt="img"
                    height={500}
                    width={500}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/80"></div>
                <button
                  // onClick={() => setOpenImage(true)}
                  className="absolute group-hover:duration-500 inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all ">
                  <FiMove
                    onClick={() => handleOpenModle(index)}
                    className="text-white xl:text-5xl md:text-3xl text-2xl"
                  />
                </button>
              </div>
            );
          })}
      </div>
      {/* image end  */}
    </>
  );
};

export default ImageModel;
