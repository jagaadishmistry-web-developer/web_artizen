import { testimoniData } from "@/utils/TestimoniData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImagePaetUi from "./ImagePaetUi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const ServicesTestimoniUi = () => {
  var settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[url('/teatimoniBg.png')] bg-cover bg-center h-full w-full">
        <div className="container mx-auto px-7 text-white pt-[90px]">
          <div className="flex flex-col items-center gap-6">
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#0f0232] lg:to-[#0C0E1A] to-[#5A12F6] px-2 py-1  text-center">
              Our Testimonials
            </p>
            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
              How Clients React
            </p>
          </div>

          {/* Card  */}
          <div className="py-16">
            <Slider {...settings}>
              {testimoniData.slice(0, 3).map((teData) => {
                return (
                  <div key={teData.id} className="group block">
                    <div className="2xl:h-[410px] xl:h-[400px] w-full bg-[#0C0E1A] hover:bg-[#5A12F6] hover:border-[#5A12F6] xl:px-12 lg:px-8 md:px-12 px-4 xl:py-12 lg:py-8 py-7 border">
                      <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-6 gap-4">
                        <Image
                          src={teData.img}
                          height={500}
                          width={500}
                          className="border-[3px] border-[#5A12F6] rounded-full 2xl:h-[100px] xl:h-[80px] lg:h-[60px] md:h-[70px] h-[50px] 2xl:w-[100px] xl:w-[80px] lg:w-[60px] md:w-[70px] w-[50px]"
                          alt=""
                        />
                        <div className="flex flex-col justify-center">
                          <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[19px] font-semibold">
                            {teData.name}
                          </p>
                          <p className="font-medium 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[14px] text-[12px]">
                            {teData.profession}
                          </p>
                        </div>
                      </div>
                      <div className="pt-5">
                        <Image
                          src={"/start.png"}
                          height={500}
                          width={500}
                          className="2xl:h-[30px] h-[20px] 2xl:w-[170px] w-[120px]"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="absolute 2xl:top-[205px] xl:top-[175px] lg:top-[140px] md:top-[145px] top-[125px] text-[50px] mt-2 text-[#5A12F6] group-hover:text-white">
                          “
                        </p>
                        <p className="2xl:text-[18px] xl:text-[16px] lg:text-[13px] md:text-[14px] text-[12px] mt-14">
                          {teData.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {/* image  */}
            <ImagePaetUi />
            {/* image end  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesTestimoniUi;
