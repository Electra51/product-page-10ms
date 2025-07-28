import Image from "next/image";
import React from "react";

type FeatureItem = {
  icon: string;
  title: string;
  subtitle: string;
};

type FeatureData = {
  name: string;
  values: FeatureItem[];
};
interface FeaturesProps {
  featureData: FeatureData;
}

const Features = ({ featureData }: FeaturesProps) => {
  return (
    <div>
      <div className="flex flex-col gap-3 w-[100%] md:w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          {featureData.name}
        </h2>

        <div className="w-[100%] md:w-[768px] mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 rounded-md border bg-[#111827] p-6">
          {featureData.values.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 min-w-[40px]">
                <Image
                  src={item.icon}
                  alt="feature icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-medium leading-[26px] text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
