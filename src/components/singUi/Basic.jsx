import { Menu } from "@headlessui/react";
import Link from "next/link";

const Basic = () => {
  return (
    <>
      <div className="px-96 py-52">
        <Menu>
          <Menu.Button>Home</Menu.Button>
          <div className="bg-[#5A12F6] relative">
            <Menu.Items>
              <div className="flex flex-col gap-2 absolute top-5">
                <Menu.Item>
                  <Link className="bg-[#5A12F6] px-2 py-1 text-white" href="/">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className="bg-[#5A12F6] px-2 py-1 text-white"
                    href="/home2">
                    Home 2
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </>
  );
};
export default Basic;
