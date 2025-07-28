import stripHtmlTags from "@/utils/FunctionstripHtmlTags";
import React from "react";

type CourseItem = {
  title: string;
  description: string;
};

type CourseData = {
  name: string;
  values: CourseItem[];
};

interface CourseDetailsProps {
  courseData: CourseData;
}

const CourseDetails = ({ courseData }: CourseDetailsProps) => {
  return (
    <div>
      <div className="max-w-[100%] md:max-w-[1200px] mx-auto mb-7 xs:bg-[#EEF2F4] xs:pt-2 px-4 md:px-0">
        <div className="bg-white pt-4 pb-2">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {courseData?.name}
          </h2>

          <div className="space-y-4 rounded-lg py-2 md:border border-[#dbe1eb] px-0 md:px-3 w-[100%] md:w-[768px]">
            {courseData?.values.map((e, i) => (
              <details
                className="mb-0 border-[#dbe1eb] border-b border-dashed last:border-none"
                key={i}>
                <summary className="cursor-pointer px-4 py-3 text-[16px] font-medium">
                  <b className="text-[16px]">{stripHtmlTags(e?.title)}</b>
                </summary>
                <div
                  className="px-4 py-3 text-sm text-gray-700 text-[16px]"
                  dangerouslySetInnerHTML={{ __html: e?.description }}></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
