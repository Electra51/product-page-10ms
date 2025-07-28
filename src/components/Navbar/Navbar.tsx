"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/10mslogo.svg";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitchLang = () => {
    const newLang = pathname.startsWith("/en") ? "bn" : "en";

    let newPath;
    if (pathname === "/") {
      newPath = `/${newLang}`;
    } else if (/^\/(en|bn)(\/|$)/.test(pathname)) {
      newPath = pathname.replace(/^\/(en|bn)/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-0 border-b border-[#dbe1eb]">
        <div className="mx-auto flex max-w-[100%] md:max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
          <div className="flex justify-start items-center gap-3">
            <svg
              className="md:hidden block"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
            </svg>
            <Image src={logo} alt="" height={27} width={100} />
          </div>
          <div className="flex-1 hidden w-full pr-4 md:block">
            <div className="w-full">
              <div className="relative flex w-full flex-col items-center bg-white  z-50">
                <div className=" shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="24"
                    fill="none"
                    viewBox="0 0 27 24">
                    <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
                    <path
                      fill="#111827"
                      d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"></path>
                    <path
                      fill="#F1844C"
                      d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"></path>
                  </svg>
                  <input
                    defaultValue=""
                    type="search"
                    placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                    className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                    name="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <span className="flex justify-center items-center">
              Class 6-12{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className="flex justify-center items-center">
              Skills{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span>Admission</span>
            <span className="flex justify-center items-center">
              Online Batch{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className="flex justify-center items-center">
              English Centre{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className="flex justify-center items-center">
              More{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="border px-2 py-1 text-sm rounded hidden md:block"
              onClick={handleSwitchLang}>
              <span
                className={`text-[18px] pl-1 ${
                  pathname.startsWith("/en")
                    ? "font-bold text-green-600"
                    : "text-gray-500"
                }`}>
                EN
              </span>
              <span className="px-1">|</span>
              <span
                className={`text-[18px] ${
                  pathname.startsWith("/bn")
                    ? "font-bold text-green-600"
                    : "text-gray-500"
                }`}>
                বাং
              </span>
            </button>
            <svg
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="24"
              fill="none"
              viewBox="0 0 27 24">
              <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
              <path
                fill="#111827"
                d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"></path>
              <path
                fill="#F1844C"
                d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"></path>
            </svg>
            <svg
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="#130F26"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.61 10.394c3.325 3.323 4.079-.522 6.195 1.594 2.04 2.04 3.214 2.448.628 5.033-.323.26-2.381 3.391-9.612-3.838C-.41 5.953 2.72 3.893 2.98 3.57c2.592-2.592 2.993-1.412 5.034.628 2.116 2.116-1.727 2.873 1.597 6.196z"
                clipRule="evenodd"></path>
            </svg>
            <span className="text-green-600 font-semibold hidden lg:flex md:block justify-center items-center gap-1">
              <IoCall className="text-green-600" /> 16910
            </span>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 font-semibold rounded text-sm">
              লগ-ইন
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto block md:hidden max-w-[100%] md:max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        <div className="gap-6 flex justify-between items-center text-sm text-gray-700">
          <span className="flex justify-center items-center text-[16px]">
            Class 6-12{" "}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <span className="flex justify-center items-center text-[16px]">
            Skills{" "}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <span className="text-[16px]">Admission</span>
          <span className="flex justify-center items-center text-[16px]">
            More{" "}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
