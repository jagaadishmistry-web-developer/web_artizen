import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
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
      {/* LG NavBar */}
      <div className="container mx-auto px-7 flex lg:flex-col">
        <div className="grid grid-cols-4 items-center xl:h-[80px] lg:h-[70px] md:h-[65px] h-[45px]">
          <div className="col-span-1">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                className="xl:h-[50px] lg:h-[40px] md:h-[40px] h-[28px] xl:w-[188px] lg:w-[170px] md:w-[180px] w-[195px]"
                width={500}
                height={500}
                priority
                alt=""
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
                  href={"/"}
                  className={` ${
                    router.pathname === `/` ? `text-[#5A12F6] ` : `text-black`
                  }`}>
                  Home
                </Link>
                <span
                  className={` ${
                    router.pathname === `/`
                      ? `text-[#5A12F6] group-hover:rotate-180`
                      : `text-black`
                  }`}>
                  <IoMdArrowDropdown className="text-xl" />
                </span>
              </div>
              {dropDownOpen && (
                <Link
                  className="absolute bg-white border px-3 w-28 py-3"
                  href={"/home2"}>
                  Home 2
                </Link>
              )}
            </div>

            <Link
              href={"/aboutUs"}
              className={` ${
                router.pathname === `/aboutUs`
                  ? `text-[#5A12F6] `
                  : `text-black`
              }`}>
              About Us
            </Link>
            <Link
              href={"/services"}
              className={` ${
                router.pathname === `/services`
                  ? `text-[#5A12F6] `
                  : `text-black`
              }`}>
              Services
            </Link>
            <Link
              href={"/blogs"}
              className={` ${
                router.pathname === `/blogs` ? `text-[#5A12F6] ` : `text-black`
              }`}>
              Blogs
            </Link>
            <Link
              href={"/contact"}
              className={` ${
                router.pathname === `/contact`
                  ? `text-[#5A12F6] `
                  : `text-black`
              }`}>
              Contact
            </Link>
          </div>
          <div className="col-span-1 lg:flex hidden justify-end">
            <Link href={"/singIn"}>
              <button className="flex gap-1 xl:h-[45px] h-[42px] xl:w-[141px] w-[132px] bg-[#5A12F6] text-white items-center justify-center rounded-full">
                <span>
                  <FaRegUserCircle />
                </span>
                <span> Sign In</span>
              </button>
            </Link>
          </div>
        </div>
        {/* LG NavBar End  */}

        {/* Mobile NavBar  */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 lg:hidden pt-3 md:pt-6">
          {nav ? (
            <FaXmark className="w-6 h-5" />
          ) : (
            <FaBars className="w-6 h-5" />
          )}
        </div>
        {nav && (
          <div
            // onClick={() => setNav(false)}
            className="absolute md:top-[150px] top-[130px] text-center flex items-center justify-center left-[25px] md:left-[30px] right-[25px] md:right-[30px] bg-[#5A12F6] h-[450px] md:h-[450px]">
            <div className="text-xl font-medium text-white gap-2">
              <div className="grid gap-10 place-items-center text-[15px]">
                <div className="grid gap-4">
                  <div className="" onMouseEnter={mEnter} onMouseLeave={mLeave}>
                    <div className="flex gap-1 items-center pb-2">
                      <p>Home</p>
                      <span>
                        <IoMdArrowDropdown className="text-xl" />
                      </span>
                    </div>
                    {dropDownOpen && (
                      <Link className="px-3 bg-black py-3 w-28" href={"/home2"}>
                        Home 2
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

export default NavBar;
