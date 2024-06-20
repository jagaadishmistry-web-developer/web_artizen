import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact1 from "../../../public/contact1.png";

const ContactUi = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm("service_ymuj1ud", "template_igpdss6", form.current, {
        publicKey: "w1TOagJMBZn_ApDP1",
      })
      .then(
        (result) => {
          alert("sent message succesfull");
        },
        (error) => {
          alert(error.message);
        }
      );
  };
  return (
    <>
      <div className="bg-[url('/contactBg.png')] bg-center bg-cover xl:py-[100px] py-[70px]">
        <div className="container mx-auto px-7">
          <div className="text-white flex flex-col 2xl:gap-[72px] xl:gap-16 lg:gap-14 gap-14 items-center">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full 2xl:gap-14 xl:gap-10 gap-6">
              <div className="flex lg:justify-start justify-center">
                <Image src={contact1} className="w-full" alt="" />
              </div>
              <div className="flex flex-col 2xl:gap-10 xl:gap-9 lg:gap-6 gap-8 xl:text-[16px] lg:text-[13px] md:text-[15px] text-[13px]">
                <div className="flex flex-col items-center xl:gap-6 lg:gap-3 gap-5">
                  <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#514b62] lg:to-[#0C0E1A] to-[#5A12F6] px-2 py-1 text-center">
                    CONTACT US
                  </p>
                  <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold flex flex-col xl:gap-2 lg:gap-1 gap-1">
                    Get in Touch!
                  </p>
                </div>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="text-black h-full">
                  <div className="h-full w-full bg-white grid place-items-center gap-3 2xl:px-12 xl:px-10 lg:px-6 px-4 xl:py-8 lg:py-10 md:py-14 py-12">
                    <input
                      name="from_name"
                      type="text"
                      placeholder="Your Name"
                      className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[14px] xl:px-4 lg:px-3 px-2 focus:outline-none"
                      required
                    />
                    <input
                      name="from_email"
                      type="text"
                      placeholder="Your Email"
                      className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[14px] xl:px-4 lg:px-3 px-2 focus:outline-none"
                      required
                    />
                    <input
                      name="from_phone"
                      type="text"
                      placeholder="Your Phone"
                      className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[14px] xl:px-4 lg:px-3 px-2 focus:outline-none"
                      required
                    />
                    <input
                      name="from_subject"
                      type="text"
                      placeholder="Your Subject"
                      className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[14px] xl:px-4 lg:px-3 px-2 focus:outline-none"
                      required
                    />
                    <textarea
                      name="message"
                      type="text"
                      placeholder="message"
                      className="border w-full 2xl:py-[16px] xl:py-[13px] lg:py-[10px] py-[10px] xl:px-4 lg:px-3 px-2 2xl:h-[200px] xl:h-[140px] lg:h-[110px] h-[100px] focus:outline-none"
                      required
                    />

                    <div className="pt-3 flex lg:justify-start justify-center w-full">
                      <button
                        type="submit"
                        value="Send"
                        className="flex bg-[#5A12F6] text-white rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full gap-6">
              <p className="2xl:text-[28px] xl:text-[25px] lg:text-[23px] mtext-[22px]">
                CONTACT INFO:
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-14 xl:gap-10 gap-6 text-black">
                <div className="bg-white 2xl:h-[180px] xl:h-[160px] lg:h-[130px] md:h-[150px] h-[110px] 2xl:px-16 xl:px-10 lg:px-5 md:px-8 px-3 lg py-2 flex items-center">
                  <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-4 md:gap-7 gap-2 items-center">
                    <div className="2xl:h-[80px] xl:h-[70px] lg:h-[60px] md:h-[80px] h-[40px] 2xl:w-[80px] xl:w-[70px] lg:w-[60px] md:w-[80px] w-[40px] bg-[#5A12F6] rounded-full grid place-items-center text-white">
                      <IoCall className="md:h-10 h-6 md:w-10 w-6" />
                    </div>
                    <div className="">
                      <p className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[17px] text-[14px] font-medium">
                        Phone Number
                      </p>
                      <p className="2xl:text-[28px] xl:text-[25px] lg:text-[22px] md:text-[26px] text-[18px] font-medium">
                        +00 99 6585 564
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white 2xl:h-[180px] xl:h-[160px] lg:h-[130px] md:h-[150px] h-[110px] 2xl:px-16 xl:px-10 lg:px-5 md:px-8 px-3 lg py-2 flex items-center">
                  <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-4 md:gap-7 gap-2 items-center">
                    <div className="2xl:h-[80px] xl:h-[75px] lg:h-[60px] md:h-[80px] h-[40px] 2xl:w-[85px] xl:w-[82px] lg:w-[68px] md:w-[80px] w-[50px] bg-[#5A12F6] rounded-full grid place-items-center text-white">
                      <FaLocationDot className="md:h-10 h-5 md:w-10 w-5" />
                    </div>
                    <div className="">
                      <p className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[17px] text-[14px] font-medium">
                        Location
                      </p>
                      <p className="2xl:text-[28px] xl:text-[25px] lg:text-[22px] md:text-[26px] text-[18px] font-medium">
                        123 Stree New York City , America
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white 2xl:h-[180px] xl:h-[160px] lg:h-[130px] md:h-[150px] h-[110px] 2xl:px-16 xl:px-10 lg:px-5 md:px-8 px-3 lg py-2 flex items-center">
                  <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-4 md:gap-7 gap-2 items-center">
                    <div className="2xl:h-[80px] xl:h-[70px] lg:h-[60px] md:h-[80px] h-[40px] 2xl:w-[80px] xl:w-[70px] lg:w-[60px] md:w-[80px] w-[40px] bg-[#5A12F6] rounded-full grid place-items-center text-white">
                      <CgMail className="md:h-10 h-6 md:w-10 w-6" />
                    </div>
                    <div className="">
                      <p className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[17px] text-[14px] font-medium">
                        Email
                      </p>
                      <p className="2xl:text-[28px] xl:text-[25px] lg:text-[22px] md:text-[26px] text-[18px] font-medium">
                        createuiuxlab@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white 2xl:h-[180px] xl:h-[160px] lg:h-[130px] md:h-[150px] h-[110px] 2xl:px-16 xl:px-10 lg:px-5 md:px-8 px-3 lg py-2 flex items-center">
                  <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-4 md:gap-7 gap-2 items-center">
                    <div className="2xl:h-[80px] xl:h-[70px] lg:h-[60px] md:h-[80px] h-[40px] 2xl:w-[80px] xl:w-[70px] lg:w-[60px] md:w-[80px] w-[40px] bg-[#5A12F6] rounded-full grid place-items-center text-white">
                      <TbWorldWww className="md:h-10 h-6 md:w-10 w-6" />
                    </div>
                    <div className="">
                      <p className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[17px] text-[14px] font-medium">
                        website
                      </p>
                      <p className="2xl:text-[28px] xl:text-[25px] lg:text-[22px] md:text-[26px] text-[18px] font-medium">
                        www.createuiuxlab.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[85px]"></div>
      </div>
    </>
  );
};
export default ContactUi;
