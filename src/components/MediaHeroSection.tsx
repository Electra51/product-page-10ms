/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaPlay } from "react-icons/fa";

function MediaHeroSection({
  media,
  checkListData,
}: {
  media: any[];
  checkListData: any;
}) {
  console.log("checkListData", checkListData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="absolute w-full md:max-w-[330px] lg:max-w-[400px] bg-transparent md:bg-white right-0 top-[4px] md:top-[50px] md:border border-[#dbe1eb]">
      <div className="md:sticky md:top-[116px] p-1">
        {media.length > 0 && (
          <>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2">
              {media.map((item, idx) => (
                <SwiperSlide key={idx}>
                  {item.resource_type === "image" ? (
                    <div className="relative w-full h-[230px] border border-[#dbe1eb] overflow-hidden">
                      <Image
                        src={item.thumbnail_url || item.resource_value}
                        alt="Gallery"
                        width={400}
                        height={300}
                        unoptimized
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-[230px]  overflow-hidden">
                      <div className="w-full h-[230px] bg-black opacity-25 transition-opacity duration-300 ease-in-out absolute top-0 left-0"></div>
                      <Image
                        src={item.thumbnail_url}
                        alt="Video thumbnail"
                        width={400}
                        height={300}
                        unoptimized
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-md flex items-center h-[56px] w-[56px] rounded-full bg-white justify-center border-[#dbe1eb]">
                        <FaPlay className="text-green-500 text-xl opacity-90" />
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper">
              {media.map((item, idx) => (
                <SwiperSlide key={idx} className="!w-[60px] !h-[40px] rounded">
                  {/* <div className="w-[60px] h-[40px] rounded overflow-hidden"> */}
                  <Image
                    src={item.thumbnail_url || item.resource_value}
                    alt="Thumb Slide"
                    width={80}
                    height={60}
                    unoptimized
                    className="object-fit w-full h-full rounded"
                  />
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        <div className="px-4 hidden md:block">
          <div className="flex items-center justify-between md:flex-col md:items-start my-4 p-1">
            <div className="inline-block text-2xl font-semibold">৳1000</div>
          </div>

          <button className="bg-green-500 whitespace-nowrap button primary text-center md:w-full centered-buttons">
            Enroll
          </button>

          <div className="max-w-[1200px] mx-auto mb-7 xs:bg-[#EEF2F4] xs:pt-2">
            <div className="bg-white pt-4 pb-2">
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                এই কোর্সে যা থাকছে
              </h2>

              <ul className="space-y-3">
                {checkListData.map((item: any) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={20}
                      height={20}
                      className="mt-1"
                    />
                    <p className="text-[16px] text-[#111827]">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaHeroSection;
