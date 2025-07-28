/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/Footer/Footer";
import MediaHeroSection from "@/components/MediaHeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { fetchProduct } from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  params: Promise<{ lang: string }>;
}

function stripHtmlTags(htmlString: string): string {
  if (!htmlString) return "";
  return htmlString.replace(/<[^>]*>?/gm, "");
}
function stripHtmlTagsforInstructor(htmlString: string): string {
  if (!htmlString) return "";
  return htmlString
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>?/gm, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const data = await fetchProduct(params.lang);
  const seo = data.data.seo;

  const getMetaValue = (property: string) =>
    seo?.defaultMeta?.find((m: any) => m.value === property)?.content || "";

  return {
    title: seo?.title || data.data.title,
    description: seo?.description,
    keywords: seo?.keywords,
    openGraph: {
      title: getMetaValue("og:title"),
      description: getMetaValue("og:description"),
      type: "website",
      locale: getMetaValue("og:locale"),
      url: getMetaValue("og:url"),
      images: [
        {
          url: getMetaValue("og:image"),
          alt: getMetaValue("og:image:alt"),
          type: getMetaValue("og:image:type") || "image/jpeg",
        },
      ],
    },
  };
}

export default async function IELTSPage(props: Props) {
  const { lang } = await props.params;
  if (lang !== "en" && lang !== "bn") notFound();
  const data = await fetchProduct(lang);
  const media = data.data.media.filter(
    (item: any) =>
      item.resource_type === "image" || item.resource_type === "video"
  );
  const checklist = data.data.checklist;

  console.log("data", data);

  return (
    <>
      <Navbar />
      <main
        className={`mx-auto ${lang === "bn" ? "font-bengali" : "font-inter"}`}>
        <div className="md:min-h-[300px] hero-banner min-h-[550px]">
          <div className="max-w-[100%] md:max-w-[1200px] mx-auto min-h-[300px] flex flex-col justify-center relative">
            <MediaHeroSection media={media} checkListData={checklist} />
            <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl mt-[310px] md:mt-0 px-3 md:px-0">
              {data.data.title}
            </h1>
            <div className="flex justify-start items-center gap-1 px-3 md:px-0">
              <FaStar className="text-[#F3A431] text-[21px]" />
              <FaStar className="text-[#F3A431] text-[21px]" />
              <FaStar className="text-[#F3A431] text-[21px]" />
              <FaStar className="text-[#F3A431] text-[21px]" />
              <FaStar className="text-[#F3A431] text-[21px]" />
              <p className="text-white text-[17px] mt-1">
                (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </p>
            </div>
            {data.data.description && (
              <div className="mt-4 px-3 md:px-0 text-gray-400 max-w-[700px]">
                {stripHtmlTags(data.data.description)}
              </div>
            )}
          </div>
        </div>
        <div className="px-4 md:hidden block">
          <div className="flex items-center justify-between md:flex-col md:items-start my-4 p-1">
            <div className="inline-block text-2xl font-semibold">৳1000</div>
          </div>

          <button className="w-full bg-green-500 whitespace-nowrap button primary text-center md:w-full centered-buttons">
            Enroll
          </button>

          <div className="max-w-[1200px] mx-auto mb-7 xs:bg-[#EEF2F4] xs:pt-2">
            <div className="bg-white pt-4 pb-2">
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                এই কোর্সে যা থাকছে
              </h2>

              <ul className="space-y-3">
                {checklist.map((item: any) => (
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

        {/* instructor section*/}
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
          <div className="pt-[32px] pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[2].name}
            </h2>

            <div className="w-[100%] md:w-[768px] border border-[#dbe1eb] rounded-md p-4 flex gap-4 items-end">
              <div className="w-16 h-16 min-w-16 rounded-full overflow-hidden relative">
                <Image
                  src={data.data.sections[2].values[0].image}
                  alt={data.data.sections[2].values[0].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-base font-semibold flex items-center gap-1 hover:text-green-600 cursor-pointer">
                  {data.data.sections[2].values[0].name}
                  <span className="text-green-600 text-lg font-bold">›</span>
                </p>

                <p className="text-sm mt-1 max-w-[280px]">
                  {stripHtmlTagsforInstructor(
                    data.data.sections[2].values[0].description
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* features section */}
        <div className="flex flex-col gap-3 w-[100%] md:w-[1200px] mx-auto px-4 md:px-0">
          <h2 className="text-xl font-semibold leading-[30px] text-black">
            {data.data.sections[3].name}
          </h2>

          <div className="w-[100%] md:w-[768px] mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 rounded-md border bg-[#111827] p-6">
            {data.data.sections[3].values.map(
              (
                item: { icon: string; title: string; subtitle: string },
                idx: number
              ) => (
                <div key={idx} className="flex items-start gap-4">
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
              )
            )}
          </div>
        </div>

        {/* pointer section */}
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[5].name}
            </h2>

            <div className="w-[100%] md:w-[768px] md:border border-[#dbe1eb] rounded-md p-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {data.data.sections[5].values.map(
                (item: { id: string; text: string }) => (
                  <div key={item.id} className="flex items-start gap-2">
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
                )
              )}
            </div>
          </div>
        </div>

        {/* course exclusive feature */}
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[100%] md:max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-0">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[8].name}
            </h2>

            <div className="w-[100%] md:w-[768px] border border-[#dbe1eb] rounded-md px-4 grid grid-cols-1 md:grid-cols-1 divide-y divide-[#dbe1eb]">
              {data.data.sections[8]?.values?.map((feature: any) => (
                <div
                  key={feature.id}
                  className="flex flex-col md:flex-row gap-2 py-4">
                  <div>
                    <h3 className="font-medium leading-[30px] text-[#111827] text-[17px]">
                      {feature.title}
                    </h3>
                    <ul className="list-none space-y-2">
                      {feature.checklist.map((item: any, index: number) => (
                        <li key={index} className="flex items-start gap-2">
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
                      className="mt-4 rounded mr-auto md:ml-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[100%] md:max-w-[1200px] mx-auto mb-7 xs:bg-[#EEF2F4] xs:pt-2 px-4 md:px-0">
          <div className="bg-white pt-4 pb-2">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data?.sections[7]?.name}
            </h2>

            <div className="space-y-4 rounded-lg py-2 md:border border-[#dbe1eb] px-0 md:px-3 w-[100%] md:w-[768px]">
              {data.data?.sections[7]?.values.map((e: any, i: any) => (
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
      </main>
      <Footer />
    </>
  );
}
