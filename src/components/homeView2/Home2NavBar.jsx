import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";

const Home2NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const mEnter = () => {
    setDropDownOpen(true);
  };
  const mLeave = () => {
    setDropDownOpen(false);
  };

  const [nav, setNav] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex lg:flex-col border-b border-[#8B59F9]">
        <div className="container mx-auto px-7 grid grid-cols-4 items-center xl:h-[100px] lg:h-[90px] md:h-[75px] h-[55px]">
          <div className="col-span-1">
            <Link href={"/"}>
              <Image
                src={"/footerLogo.png"}
                className="xl:h-[50px] lg:h-[40px] md:h-[40px] h-[28px] xl:w-[188px] lg:w-[170px] md:w-[180px] w-[195px]"
                width={500}
                height={500}
                priority
                alt="image"
              />
            </Link>
          </div>
          <div className="col-span-2 xl:text-[16px] lg:text-[14px] font-medium lg:flex xl:gap-[38px] lg:gap-[28px] hidden justify-center">
            <div
              className="hover-dropdown"
              onMouseEnter={mEnter}
              onMouseLeave={mLeave}>
              <div className="flex gap-1 items-center group">
                <Link
                  href={"/home2"}
                  className={` ${
                    router.pathname === `/`
                      ? `text-[#5A12F6] `
                      : `text-[#5A12F6] `
                  }`}>
                  Home 2
                </Link>
                <span
                  className={` ${
                    router.pathname === `/`
                      ? `text-[#5A12F6] group-hover:rotate-180`
                      : `text-[#5A12F6] group-hover:rotate-180`
                  }`}>
                  <IoMdArrowDropdown className="text-xl" />
                </span>
              </div>
              {dropDownOpen && (
                <Link
                  className="absolute bg-white border px-3 w-28 py-3"
                  href={"/"}>
                  Home
                </Link>
              )}
            </div>
            <Link
              href={"/aboutUs"}
              className={` ${
                router.pathname === `/aboutUs`
                  ? `text-[#5A12F6] `
                  : `text-white`
              }`}>
              About Us
            </Link>
            <Link
              href={"/services"}
              className={` ${
                router.pathname === `/services`
                  ? `text-[#5A12F6] `
                  : `text-white`
              }`}>
              Services
            </Link>
            <Link
              href={"/blogs"}
              className={` ${
                router.pathname === `/blogs` ? `text-[#5A12F6] ` : `text-white`
              }`}>
              Blogs
            </Link>
            <Link
              href={"/contact"}
              className={` ${
                router.pathname === `/contact`
                  ? `text-[#5A12F6] `
                  : `text-white`
              }`}>
              Contact
            </Link>
          </div>
          <div className="col-span-1 lg:flex hidden justify-end">
            <Link href={"/singIn"}>
              <button className="flex gap-1 xl:h-[45px] h-[42px] xl:w-[141px] w-[132px] bg-[#ffff] text-[#5A12F6] items-center justify-center rounded-full">
                <span>
                  <FaRegUserCircle />
                </span>
                <span> Sign In</span>
              </button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 lg:hidden pt-3 md:pt-7 mr-6">
          {nav ? (
            <FaXmark className="w-6 h-5 text-white" />
          ) : (
            <FaBars className="w-6 h-5 text-white" />
          )}
        </div>
        {nav && (
          <div className="absolute md:top-[90px] top-[70px] text-center flex items-center justify-center left-[25px] md:left-[30px] right-[25px] md:right-[30px] bg-[#5A12F6] h-[450px] md:h-[400px]">
            <div className="text-xl font-medium text-white gap-2">
              <div className="grid gap-10 place-items-center text-[15px]">
                <div className="grid gap-4">
                  <div className="" onMouseEnter={mEnter} onMouseLeave={mLeave}>
                    <div className="flex gap-1 items-center pb-2">
                      <p>Home 2</p>
                      <span>
                        <IoMdArrowDropdown className="text-xl" />
                      </span>
                    </div>
                    {dropDownOpen && (
                      <Link className=" px-3 bg-black py-3 w-28" href={"/"}>
                        Home
                      </Link>
                    )}
                  </div>

                  <Link href={"/aboutUs"}>About Us</Link>
                  <Link href={"/services"}>Services</Link>
                  <Link href={"/blogs"}>Blogs</Link>
                  <Link href={"/contact"}>Contact</Link>
                </div>
                <Link href={"/singIn"}>
                  <button className="flex gap-1 bg-black text-white text-[17px] rounded-full px-7 py-2">
                    <span className="pt-1">
                      <FaRegUserCircle />
                    </span>
                    <span> Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home2NavBar;
