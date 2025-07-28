import stripHtmlTagsforInstructor from "@/utils/InstructorDetailsFunction";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

type InstructorValue = {
  name: string;
  image: string;
  description: string;
};

type InstructorDetails = {
  name: string;
  values: InstructorValue[];
};

interface InstructorProps {
  details: InstructorDetails;
}

const Instructor = ({ details }: InstructorProps) => {
  return (
    <div>
      <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
        <div className="pt-[32px] pb-2 bg-white">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {details.name}
          </h2>

          <div className="w-[100%] md:w-[768px] border border-[#dbe1eb] rounded-md p-4 flex gap-4 items-end">
            <div className="w-16 h-16 min-w-16 rounded-full overflow-hidden relative">
              <Image
                src={details.values[0].image}
                alt={details.values[0].name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-base font-semibold flex items-center gap-1 group hover:text-green-600 cursor-pointer">
                {details.values[0].name}
                <span className="text-gray-400 text-sm font-bold group-hover:text-green-500">
                  <FaAngleRight className=" font-light" />
                </span>
              </p>

              <p className="text-sm mt-1 max-w-[280px]">
                {stripHtmlTagsforInstructor(details.values[0].description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
