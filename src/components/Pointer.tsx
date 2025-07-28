import React from "react";

type PointerItem = {
  id: string;
  text: string;
};

type PointerData = {
  name: string;
  values: PointerItem[];
};

interface PointerProps {
  pointerData: PointerData;
}

const Pointer = ({ pointerData }: PointerProps) => {
  return (
    <div>
      <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
        <div className="pt-4 pb-2 bg-white">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {pointerData.name}
          </h2>

          <div className="w-[100%] md:w-[768px] md:border border-[#dbe1eb] rounded-md p-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
            {pointerData.values.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg
                  className="mt-1 text-blue-500 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16">
                  <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-8.25 8.25a.75.75 0 0 1-1.06 0L1.454 7.519a.75.75 0 1 1 1.06-1.06l3.19 3.188 7.78-7.78z" />
                </svg>
                <p className="text-[17px] text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pointer;
