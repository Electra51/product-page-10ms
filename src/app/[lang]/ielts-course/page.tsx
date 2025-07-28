/* eslint-disable @typescript-eslint/no-explicit-any */
import MediaHeroSection from "@/components/MediaHeroSection";
import { fetchProduct } from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaStar } from "react-icons/fa";
import Instructor from "@/components/Instructor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Pointer from "@/components/Pointer";
import Exclusive from "@/components/Exclusive";
import CourseDetails from "@/components/CourseDetails";
import stripHtmlTags from "@/utils/FunctionstripHtmlTags";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const data = await fetchProduct(lang);
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
              {Array.from({ length: 5 }).map((icon, i) => (
                <FaStar key={i} className="text-[#F3A431] text-[21px]" />
              ))}
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
        <Instructor details={data.data.sections[2]} />
        <Features featureData={data.data.sections[3]} />
        <Pointer pointerData={data.data.sections[5]} />
        <Exclusive exclusiveData={data.data.sections[8]} />
        <CourseDetails courseData={data.data?.sections[7]} />
      </main>
      <Footer />
    </>
  );
}
