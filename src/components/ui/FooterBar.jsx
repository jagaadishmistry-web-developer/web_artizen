import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCircleDot,
  FaTwitter,
} from "react-icons/fa6";
import { IoCallOutline, IoLocation } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const FooterBar = () => {
  return (
    <>
      <div className="bg-[url('/footerBarBg.png')] bg-cover bg-center">
        <div className="container mx-auto px-7 pt-24 pb-8">
          <div className="lg:bg-[url('/footerImg.png')] lg:bg-transparent bg-[#5A12F6] bg-cover bg-center 2xl:h-[750px] xl:h-[600px] lg:h-[464px] md:h-[390px] h-[424px] grid lg:grid-cols-2 grid-cols-1">
            <div className=""></div>
            <div className="flex flex-col items-center justify-center px-8 text-white gap-4 xl:pt-[200px] lg:pt-[130px] text-center">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#bda9e1] via-[#5f21e6] lg:to-[#8d61ec] to-[#895fe5] px-2 py-1 w-[180px] text-center">
                Subscribe
              </p>
              <p className="2xl:text-[46px] xl:text-[38px] lg:text-[30px] md:text-[38px] text-[30px] font-semibold">
                Subscribe To Newsletters
              </p>
              <p className="xl:text-[16px] lg:text-[14px] md:text-[16px] text-[14px]">
                It’s The Bright One, It’s The Right One, That’s Newsletter.
              </p>
              <div className="pt-8">
                <div className="bg-white px-3 py-3 md:rounded-full flex md:flex-row flex-col 2xl:gap-[150px] xl:gap-[100px] lg:gap-[15px] gap-5">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address....."
                    className="bg-transparent px-5 text-black"
                  />
                  <button className="px-5 py-2 bg-[#5A12F6] rounded-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Items  */}
          <div className="xl:py-[70px] py-[50px] text-white">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:place-items-start place-items-center 2xl:gap-10 xl:gap-8 lg:gap-5 md:gap-14 gap-12">
              {/* Col 1  */}
              <div className="flex flex-col gap-10 md:items-start md:text-start items-center text-center">
                <Image
                  src={"/footerLogo.png"}
                  className="2xl:h-[50px] xl:h-[45px] lg:h-[32px] md:h-[35px] h-[32px] 2xl:w-[188px] xl:w-[170px] lg:w-[165px] md:w-[160px] w-[155px]"
                  width={500}
                  height={500}
                  priority
                  alt=""
                />

                <p className="2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
                  Take your experience to a whole new level! Combine your talent
                  as a designer with our software's agile.
                </p>

                <div className="flex mr-3">
                  <div className="group block">
                    <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                      <FaFacebookF className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                    </button>
                  </div>
                  <div className="group block">
                    <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                      <FaTwitter className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                    </button>
                  </div>
                  <div className="group block">
                    <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                      <FaInstagram className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                    </button>
                  </div>
                  <div className="group block">
                    <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                      <FaLinkedinIn className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Col 2  */}
              <div className="flex flex-col gap-6">
                <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[26px] text-[24px] font-semibold">
                  Useful Links
                </p>
                <div className="flex flex-col gap-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Home</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">About Us</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Services</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Blogs</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Contact</div>
                  </div>
                </div>
              </div>
              {/* Col 3  */}
              <div className="flex flex-col gap-6">
                <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[26px] text-[24px] font-semibold">
                  Our Servicers
                </p>
                <div className="flex flex-col gap-4 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">IT Management</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Data Mining</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Deep Learning</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Outsourcing</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="">
                      <FaRegCircleDot />
                    </div>
                    <div className="">Statistic</div>
                  </div>
                </div>
              </div>
              {/* Col 4 */}
              <div className="flex flex-col gap-4">
                <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[26px] text-[24px] font-semibold">
                  Contact Information
                </p>
                <div className="flex flex-col 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                        <IoCallOutline className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                      </button>
                    </div>
                    <div className="">+99 0123 456 0470</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="group block">
                      <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                        <FiMail className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                      </button>
                    </div>
                    <div className="">createuiuxlab@gmail.com</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="group block">
                      <button className="bg-[url('/buttomBg.png')] bg-cover bg-center group-hover:scale-110 duration-300">
                        <IoLocation className="xl:p-8 lg:p-6 md:p-7 p-5 xl:text-xl text-l group-hover:scale-110 duration-300" />
                      </button>
                    </div>
                    <div className="">25 Willis Avenue, Usa, 069</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:h-[80px] xl:h-[70px] lg:h-[60px] md:h-[60px] h-[60px] bg-[#5A12F6] text-white grid place-items-center">
        <p className="2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[15px] text-[14px]">
          createuiuxlab © 2023. All Rights Reserved.
        </p>
      </div>
    </>
  );
};
export default FooterBar;
