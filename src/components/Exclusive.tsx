import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

type ExclusiveFeature = {
  id: string;
  title: string;
  checklist: string[];
  file_type?: string;
  file_url?: string;
};

type ExclusiveData = {
  name: string;
  values: ExclusiveFeature[];
};

interface ExclusiveProps {
  exclusiveData: ExclusiveData;
}
const Exclusive = ({ exclusiveData }: ExclusiveProps) => {
  return (
    <div>
      <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
        <div className="pt-4 pb-2 bg-white">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {exclusiveData.name}
          </h2>

          <div className="w-[100%] md:w-[768px] border border-[#dbe1eb] rounded-md px-4 grid grid-cols-1 md:grid-cols-1 divide-y divide-[#dbe1eb]">
            {exclusiveData?.values?.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col md:flex-row gap-2 py-4">
                <div>
                  <h3 className="font-medium leading-[30px] text-[#111827] text-[17px]">
                    {feature.title}
                  </h3>
                  <ul className="list-none space-y-2">
                    {feature.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xl">
                          <IoCheckmark />
                        </span>
                        <span className="text-[#4B5563] text-[16px]">
                          {" "}
                          {item}{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {feature.file_type === "image" && feature.file_url && (
                  <Image
                    src={feature.file_url}
                    alt={feature.title}
                    width={280}
                    height={240}
                    className="mt-4 rounded mr-auto md:ml-auto lg:ml-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
