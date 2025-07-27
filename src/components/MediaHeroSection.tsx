/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
import React, { useState } from "react";

function MediaHeroSection({ media }: { media: any[] }) {
  const [selected, setSelected] = useState<number>(0);
  console.log("media", media);

  return (
    <section className="hidden md:block absolute w-full md:max-w-[330px] lg:max-w-[400px] bg-white right-0 top-[50px] shadow-lg rounded-md overflow-hidden">
      <div className="md:sticky md:top-[116px]">
        <div className="flex overflow-x-auto gap-2 p-4">
          {media.map((item, idx) => {
            const thumb = item.thumbnail_url || item.resource_value;
            return (
              <div
                key={idx}
                onClick={() => setSelected(idx)}
                className={`w-[80px] h-[60px] rounded overflow-hidden cursor-pointer border ${
                  selected === idx ? "border-green-500" : "border-gray-300"
                }`}>
                <Image
                  src={thumb}
                  alt="preview"
                  width={80}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>

        <div className="relative w-full h-[200px]">
          {media[selected]?.resource_type === "image" ? (
            <Image
              src={
                media[selected].thumbnail_url || media[selected].resource_value
              }
              alt="Selected Preview"
              fill
              className="object-cover"
            />
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${media[selected].resource_value}`}
              title="Video Preview"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default MediaHeroSection;
