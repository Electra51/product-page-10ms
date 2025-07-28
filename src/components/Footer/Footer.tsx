import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../../assets/10mslogo.svg";
import googlePlay from "../../assets/google-play-icon.jpeg";
import iosPlay from "../../assets/ios-store-icon.jpeg";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-8 text-sm text-[#111827]">
      <div className="flex flex-col pt-12 md:flex-row  md:border-[#E4E4E4] max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
          <Image
            src={logo}
            alt="10 Minute School"
            width={116}
            height={32}
            className="mb-[14px]"
          />
          <p className="mb-[14px] text-base font-semibold md:font-medium">
            Download Our Mobile App
          </p>
          <div className="flex gap-2">
            <a href="#">
              <Image
                src={googlePlay}
                alt="Google Play"
                width={156}
                height={49}
              />
            </a>
            <a href="#">
              <Image src={iosPlay} alt="App Store" width={156} height={49} />
            </a>
          </div>
        </div>

        <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
          <div className="flex justify-center w-full max-w-sm">
            <div className="w-1/2 mr-4">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Company
              </h3>
              <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                <li>
                  <a
                    href="https://app.10minuteschool.com/careers"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Career / Recruitment
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Join as a Teacher
                  </a>
                </li>
                <li>
                  <a
                    href="https://affiliation.10minuteschool.com/"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Join as an Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.10minuteschool.com/privacy-policy"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.10minuteschool.com/refund-policy"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.10minuteschool.com/terms-and-conditions"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Others
              </h3>
              <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                <li>
                  <a
                    href="https://blog.10minuteschool.com/"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/store/all"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Book Store
                  </a>
                </li>
                <li>
                  <a
                    href="https://10minuteschool.com/content"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Free Notes &amp; Guides
                  </a>
                </li>
                <li>
                  <a
                    href="/jobs-prep"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Job Preparation Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/certificate"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Verify Certificate
                  </a>
                </li>
                <li>
                  <a
                    href="/resource"
                    className="mb-2 text-sm font-medium hover:text-green md:text-base ">
                    Free Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full ml-0 md:ml-4">
          <div className="hidden md:block">
            <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
              Keep up with us at
            </h3>
            <p className="mb-4 text-base font-normal">
              Call Us:
              <span>
                <a className="text-green-500 px-1" href="tel:16910">
                  16910
                </a>
                (24x7)
              </span>
            </p>
            <p className="mb-4 text-base font-normal">
              whatsapp:
              <span>
                <a
                  className="text-green-500 px-1"
                  href="https://api.whatsapp.com/send?phone=+8801896016252&amp;text=I need your assistance">
                  +8801896016252
                </a>
                (24x7)
              </span>
            </p>
            <p className="mb-4 text-base font-normal">
              Outside Bangladesh:
              <span>
                <a className="text-green-500 px-1" href="tel:+8809610916910">
                  +880 9610916910
                </a>
              </span>
            </p>
            <p className="mb-2 text-base font-normal">
              Email Us:
              <span className="text-green-500 px-1">
                support@10minuteschool.com
              </span>
            </p>
          </div>
          <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
            <div className="flex gap-3 mt-3 text-white">
              <a href="#" className="bg-[#111827] p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-[#111827] p-2 rounded">
                <FaInstagram />
              </a>
              <a href="#" className="bg-[#111827] p-2 rounded">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-[#111827] p-2 rounded">
                <FaYoutube />
              </a>
              <a href="#" className="bg-[#111827] p-2 rounded">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        2015 - 2025 Copyright © 10 Minute School. All rights reserved.
      </div>
    </footer>
  );
}
