import Image from "next/image";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCircleDot,
  FaRegUser,
  FaReplyAll,
  FaTwitter,
} from "react-icons/fa6";
import bd from "../../public/bd.png";
import bdd1 from "../../public/bdd1.png";
import bdd2 from "../../public/bdd2.png";
import comment1 from "../../public/comment1.png";
import comment2 from "../../public/comment2.png";
import testimoniUserImg1 from "../../public/testimoniUserImg1.png";

import { BlogData } from "@/utils/BlogData";
import {
  CategoriesData,
  InstaData,
  ItemTextData,
  RecentNewData,
  TagsData,
} from "@/utils/BlogDetailsData";
import { CgCalendarDates } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiCheckboxMultipleLine } from "react-icons/ri";

const BlogDetailsCom = () => {
  return (
    <>
      <div className="bg-[url('/about.png')] bg-cover bg-center">
        <div className="2xl:h-[500px] xl:h-[420px] lg:h-[320px] h-[300px] grid place-items-center">
          <div className="text-white flex flex-col xl:gap-5 gap-3 items-center">
            <div className="2xl:text-[46px] xl:text-[44px] lg:text-[40px] md:text-[40px] text-[32px] font-semibold">
              Blog Details
            </div>
            <div className="flex items-center gap-3 2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[17px] font-medium bg-gradient-to-r from-[#5A12F6] via-[#05000f] lg:to-black/0 to-[#5A12F6] px-2 py-1">
              <Link href={"/"} className="duration-300 hover:text-black">
                Home
              </Link>{" "}
              <span className="text-xl">
                <FaRegCircleDot />
              </span>{" "}
              <Link href={"/blogs"} className="duration-300 hover:text-black">
                Blog
              </Link>{" "}
              <span className="text-xl">
                <FaRegCircleDot />
              </span>{" "}
              <span> Blog Details</span>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------  */}
      <div className="container mx-auto px-7 2xl:py-[95px] xl:py-[85px] lg:py-[65px] py-[65px]">
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-6">
          {/* Col Span 1 */}
          <div className="lg:col-span-2 font-medium flex flex-col gap-4">
            <div className="flex justify-between 2xl:h-[55px] xl:h-[50px] lg:h-[45px] md:h-[55px] h-[45px] border border-[#5A12F6]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 overflow-hidden"
              />
              <button className="w-[55px] text-white bg-[#5A12F6] grid place-items-center">
                <FaSearch />
              </button>
            </div>
            <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px] lg:pt-4 pt-8">
              Categories
            </p>
            <div className="flex flex-col xl:gap-3 lg:gap-2 gap-4">
              {CategoriesData.map((CatagoriData) => {
                return (
                  <div
                    key={CatagoriData.id}
                    className="border border-[#5A12F6] flex justify-between px-4 2xl:py-[15px] xl:py-[13px] lg:py-[10px] md:py-[16px] py-[13px] items-center hover:bg-[#5A12F6] hover:text-white">
                    <p className="2xl:text-[18px] xl:text-[17px] lg:text-[13px] md:text-[18px] text-[14px]">
                      {CatagoriData.name}
                    </p>
                    <div className="">{CatagoriData.number}</div>
                  </div>
                );
              })}
            </div>

            {/* Recent News */}
            <div className="flex flex-col gap-4 lg:pt-4 pt-8">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Recent News
              </p>
              {RecentNewData.map((recentData) => {
                return (
                  <div key={recentData.id} className="flex flex-col gap-6">
                    <div className="grid grid-cols-12 2xl:gap-6 xl:gap-5 lg:gap-3 md:gap-6 gap-4">
                      <div className="col-span-3">
                        <Image src={recentData.img} alt="" className="w-full" />
                      </div>
                      <div className="col-span-9 flex flex-col lg:justify-between">
                        <p className="2xl:text-[17px] xl:text-[15px] lg:text-[13px] md:text-[18px] text-[14px] hover:text-[#5A12F6]">
                          {recentData.name}
                        </p>
                        <div className="flex gap-1 items-center">
                          <span>
                            <CgCalendarDates />
                          </span>
                          <span>15 Jun 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Tags  */}
            <div className="lg:pt-4 pt-8 flex flex-col gap-5 lg:text-[12px] text-[13px]">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Tags
              </p>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
                {TagsData.map((tgData) => {
                  return (
                    <div
                      key={tgData.id}
                      className="border hover:bg-[#5A12F6] hover:text-white duration-300 py-2 text-center">
                      {tgData.name}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Instagram  */}
            <div className="lg:pt-4 pt-8 flex flex-col gap-5 xl:text-[14px] lg:text-[12px] text-[14px]">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Instagram
              </p>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                {InstaData.map((inData) => {
                  return (
                    <Image
                      key={inData.id}
                      src={inData.img}
                      alt=""
                      className="w-full"
                    />
                  );
                })}
              </div>
            </div>
            {/* Follow Us  */}
            <div className="pt-6 flex flex-col gap-5 xl:text-[14px] lg:text-[12px] text-[14px]">
              <p className="2xl:text-[28px] xl:text-[26px] lg:text-[22px] md:text-[24px] text-[20px]">
                Follow Us
              </p>
              <div className="flex 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-4 gap-3 text-white">
                <button className="2xl:h-[50px] xl:h-[40px] lg:h-[32px] md:h-[40px] h-[32px] 2xl:w-[50px] xl:w-[40px] lg:w-[32px] md:w-[40px] w-[32px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                  <FaFacebookF className="2xl:text-xl xl:text-lg" />
                </button>
                <button className="2xl:h-[50px] xl:h-[40px] lg:h-[32px] md:h-[40px] h-[32px] 2xl:w-[50px] xl:w-[40px] lg:w-[32px] md:w-[40px] w-[32px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                  <FaTwitter className="2xl:text-xl xl:text-lg" />
                </button>
                <button className="2xl:h-[50px] xl:h-[40px] lg:h-[32px] md:h-[40px] h-[32px] 2xl:w-[50px] xl:w-[40px] lg:w-[32px] md:w-[40px] w-[32px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                  <FaInstagram className="2xl:text-xl xl:text-lg" />
                </button>
                <button className="2xl:h-[50px] xl:h-[40px] lg:h-[32px] md:h-[40px] h-[32px] 2xl:w-[50px] xl:w-[40px] lg:w-[32px] md:w-[40px] w-[32px] hover:scale-110 duration-200 bg-[#171717] flex items-center justify-center rounded-full shadow-md shadow-[#ffffff5e]">
                  <FaLinkedinIn className="2xl:text-xl xl:text-lg" />
                </button>
              </div>
            </div>
          </div>
          {/* Col Span 2 */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            <div className="relative">
              <div className="absolute  flex gap-1 items-center bg-[#5A12F6] text-white px-2 py-1 xl:text-[15px] text-[13px] 2xl:top-6 xl:top-4 lg:top-3 md:top-3 top-2 2xl:left-6 xl:left-4 lg:left-3 md:left-3 left-2">
                <span>
                  <CgCalendarDates />
                </span>
                <span>15 Jun 2023</span>
              </div>
              <Image src={bd} className="w-full" alt="" />
            </div>
            <div className="flex gap-1 text-[#5A12F6] items-center py-3">
              <div className="">
                <FaRegUser />
              </div>
              <div className="font-bold text-black">By Admin:</div>
              <div className="">Jhara</div>
            </div>
            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold pt-3">
              AI is being used to improve cybersecurity
            </p>
            <div className="flex flex-col gap-3 pt-6">
              <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                simply lock, a Latin professor at Hampden-Sydney looked up.
              </p>
              <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700">
                As The World Becomes Increasingly Digital, Chatbots Have Become
                A Popular Way For Businesses To Engage With Customers And
                Automate Various Processes. From Answering Customer Queries To
                Taking Orders, Chatbots Can Help Businesses Save Time And Money
                While Into Improving The Customer Experience.
              </p>
            </div>
            <div className=" text-white pt-10 relative">
              <div className="text-6xl top-12 xl:px-10 lg:px-6 md:px-8 px-6 items-start absolute">
                "
              </div>
              <div className="2xl:px-12 xl:px-10 lg:px-6 md:px-12 px-6 pb-8 pt-12 flex flex-col items-center w-full bg-[#5A12F6] gap-5">
                <p className="text-center">
                  Aenean molestie faucibus fringilla. Nam at justo eget nulla
                  dictum vehicula. Nulla ac mi adipiscing, elementum ligula at,
                  ultrices mauris. Nullam nec tortor mauris
                </p>
                <Image src={testimoniUserImg1} alt="" />
                <p className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[18px] text-[16px] font-medium">
                  John Anderson
                </p>
              </div>
            </div>
            <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold pt-9">
              Creative approach to every project
            </p>
            <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] text-slate-700 pt-5">
              As The World Becomes Increasingly Digital, Chatbots Have Become A
              Popular Way For Businesses To Engage With Customers And Automate
              Various Processes. From Answering Customer Queries To Taking
              Orders, Chatbots Can Help Businesses Save Time And Money While
              Into Improving The Customer Experience.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-9">
              <Image src={bdd1} className="h-full w-full" alt="" />
              <Image src={bdd2} className="h-full w-full" alt="" />
            </div>
            {/* ----  Item Text Line ----  */}
            <div className="pt-9 flex flex-col gap-[18px] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px]">
              {ItemTextData.map((textData) => {
                return (
                  <div
                    key={textData.id}
                    className="flex md:gap-2 gap-3 items-center">
                    <span>
                      <RiCheckboxMultipleLine className="text-[#5A12F6] md:text-xl text-lg" />
                    </span>
                    <p>{textData.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Popular Tag  */}
            <div className="">
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold pt-9">
                Popular Tag
              </p>
              <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4 pt-8  lg:text-[12px] text-[13px]">
                <div className="border hover:bg-[#5A12F6] hover:text-white duration-300 py-2 text-center">
                  Coding
                </div>
                <div className="border hover:bg-[#5A12F6] hover:text-white duration-300 py-2 text-center">
                  AIforgood
                </div>
                <div className="border hover:bg-[#5A12F6] hover:text-white duration-300 py-2 text-center">
                  Design
                </div>
                <div className="border hover:bg-[#5A12F6] hover:text-white duration-300 py-2 text-center">
                  Artist
                </div>
              </div>
            </div>
            {/* Related Posts  */}
            <div className="">
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold pt-9">
                Related Posts
              </p>
              {/* ----  */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-4 gap-6 pt-9">
                {BlogData.slice(0, 3).map((blData) => {
                  return (
                    <div key={blData.id} className="h-auto group block">
                      <div className="relative">
                        <Image src={blData.img} alt="" className="w-full" />
                        <div className="absolute flex gap-1 items-center bg-[#5A12F6] text-white px-2 py-1 xl:text-[15px] bottom-4 2xl:left-4 xl:left-4 lg:left-3 md:left-3 left-2 text-[14px]">
                          <span>
                            <CgCalendarDates />
                          </span>
                          <span>15 Jun 2023</span>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-white">
                          <div className=" 2xl:left-8 xl:left-6 lg:left-4 md:left-5 left-4 2xl:right-8 xl:right-6 lg:right-4 md:right-5 right-4 bg-[#0C0E1A] py-2">
                            <div className="2xl:px-6 xl:px-5 lg:px-4 md:px-4 px-3 2xl:py-5 xl:py-4 lg:py-3 md:py-4 py-3 flex flex-col 2xl:gap-2 xl:gap-4 lg:gap-3 md:gap-3 gap-3 h-full">
                              <div className="flex gap-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px]">
                                <span className="group-hover:text-[#5A12F6]">
                                  <FaRegUser />
                                </span>
                                <span>By Admin:</span>
                                <span className="group-hover:text-[#5A12F6]">
                                  Jhara
                                </span>
                              </div>
                              <p className="group-hover:text-[#5A12F6] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px] font-semibold">
                                {blData.name}
                              </p>
                              <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[14px]">
                                {blData.description}
                              </p>
                              <div className="pt-2 xl:text-[14px] lg:text-[13px] md:text-[14px] text-[13px]">
                                <button className=" flex items-center gap-2 xl:py-2 lg:py-[6px] md:py-[7px] py-[6px]">
                                  <span>Learn More</span>
                                  <span>
                                    <FaArrowRightLong />
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Comment  */}
            <div className="">
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold pt-9">
                2 Comment
              </p>
              <div className="pt-9 grid xl:grid-cols-8 grid-cols-12 gap-3 xl:gap-0">
                <div className="xl:col-span-1 md:col-span-2 col-span-3">
                  <Image src={comment1} alt="" />
                </div>
                <div className="xl:col-span-7 md:col-span-10 col-span-9 flex flex-col gap-2 2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[13px] text-[10px]">
                  <div className="flex justify-between ">
                    <div className="flex xl:gap-6 lg:gap-5 md:gap-5 gap-2 items-center">
                      <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[12px] text-[#5A12F6] font-medium">
                        Laurel Wallace
                      </p>
                      <p>1:29 Am</p>
                    </div>
                    <div className="">6 May, 2023</div>
                  </div>
                  <p className="">
                    A Popular Way For Businesses To Engage With Customers And
                    Automate Various Processes. From Answering Customer Queries
                    To Taking Orders, Chatbots Can Help Businesses.
                  </p>
                  <div className="flex justify-between pt-2">
                    <div className="font-medium flex gap-1 items-center">
                      <FaReplyAll />
                      Reply
                    </div>
                    <div className="flex gap-2">
                      <div className="flex gap-1 items-center">
                        <AiFillLike /> 0
                      </div>
                      <div className="flex gap-1 items-center">
                        <AiFillDislike />0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* comment Reply  */}
              <div className="pt-5">
                <div className="pt-9 grid xl:grid-cols-8 grid-cols-12 gap-3 xl:gap-0">
                  <div className="col-span-1"></div>
                  <div className="xl:col-span-1 md:col-span-2 col-span-3">
                    <Image src={comment2} alt="" />
                  </div>
                  <div className="xl:col-span-6 md:col-span-9 col-span-8 flex flex-col gap-2 2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[13px] text-[10px]">
                    <div className="flex justify-between ">
                      <div className="flex xl:gap-6 lg:gap-5 md:gap-5 gap-2 items-center">
                        <p className="2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[16px] text-[12px] text-[#5A12F6] font-medium">
                          Johan Done
                        </p>
                        <p>9:20 Pm</p>
                      </div>
                      <div className="">6 May, 2023</div>
                    </div>
                    <p className="">
                      As The World Becomes Increasingly Digital, Chatbots Have
                      Become A Popular Way For Businesses To Engage With
                      Customers And Automate Various.
                    </p>
                    <div className="flex justify-between pt-2">
                      <div className="font-medium flex gap-1 items-center">
                        <FaReplyAll />
                        Reply
                      </div>
                      <div className="flex gap-2">
                        <div className="flex gap-1 items-center">
                          <AiFillLike /> 0
                        </div>
                        <div className="flex gap-1 items-center">
                          <AiFillDislike />0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment end  */}
            {/* Leave a Comment  */}
            <div className="pt-11">
              <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-semibold">
                Leave a Comment
              </p>
              <div className="pt-6 grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                <div className="col-span-1">
                  <p className="font-medium pb-3">Enter Your Name</p>
                  <input
                    type="text"
                    className="w-full border py-[14px] px-4 text-[14px] border-[#5A12F6]"
                    placeholder="Name"
                  />
                </div>
                <div className="col-span-1">
                  <p className="font-medium pb-3">Enter Your Email</p>
                  <input
                    type="text"
                    className="w-full border py-[14px] px-4 text-[14px] border-[#5A12F6]"
                    placeholder="Email"
                  />
                </div>
                <div className="col-span-1">
                  <p className="font-medium pb-3">Enter Your Phone</p>
                  <input
                    type="text"
                    className="w-full border py-[14px] px-4 text-[14px] border-[#5A12F6]"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-span-1">
                  <p className="font-medium pb-3">Enter Your Subject</p>
                  <input
                    type="text"
                    className="w-full border py-[14px] px-4 text-[14px] border-[#5A12F6]"
                    placeholder="Subject"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium pb-3">Enter Your Message</p>
                  <textarea
                    type="text"
                    className="w-full border h-[180px] px-4 py-3 text-[14px] border-[#5A12F6]"
                    placeholder="Message"
                  />
                </div>
                <div className="pt-3">
                  <button className="flex bg-[#5A12F6] text-white rounded-full xl:h-[45px] lg:h-[40px] md:h-[45px] h-[38px] xl:w-[145px] lg:w-[120px] md:w-[145px] w-[100px] items-center justify-center hover:scale-105 duration-300 font-medium xl:text-[15px] lg:text-[14px] md:text-[15px] text-[12px]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            {/* Leave a Comment end  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetailsCom;
