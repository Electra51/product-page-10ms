/* eslint-disable @typescript-eslint/no-explicit-any */
import MediaHeroSection from "@/components/MediaHeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { fetchProduct } from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";

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

export default async function IELTSPage(props: Props) {
  const { lang } = await props.params;

  if (lang !== "en" && lang !== "bn") notFound();

  const data = await fetchProduct(lang);
  console.log("data...", data.data);
  const media = data.data.media.filter(
    (item: any) =>
      item.resource_type === "image" || item.resource_type === "video"
  );

  return (
    <>
      <Navbar />
      <main
        className={`mx-auto py-6 ${
          lang === "bn" ? "font-bengali" : "font-inter"
        }`}>
        <div className="min-h-[300px] border border-red-500 md:min-h-[300px] hero-banner">
          <div className="max-w-[1200px] mx-auto min-h-[300px] flex flex-col justify-center border border-white relative">
            {/* <section className="absolute w-full md:max-w-[330px] lg:max-w-[400px] border-2 border-red-500 bg-white right-0 md:top-[50px] md:absolute">
              <div className="md:sticky md:top-[116px]">hello</div>
            </section> */}
            <MediaHeroSection media={media} />
            <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
              {data.data.title}
            </h1>
            {data.data.description && (
              <div className="mt-4  text-gray-400 max-w-[700px]">
                {stripHtmlTags(data.data.description)}
              </div>
            )}
          </div>
        </div>
        {/* trailor */}

        {/* instructor section*/}
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 ">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[2].name}
            </h2>

            <div className="w-[768px] border border-[#dbe1eb] rounded-md p-4 flex gap-4 items-end">
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
        <div className="flex flex-col gap-3 w-[1200px] mx-auto">
          <h2 className="text-xl font-semibold leading-[30px] text-black">
            {data.data.sections[3].name}
          </h2>

          <div className="w-[768px] mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 rounded-md border bg-[#111827] p-6">
            {data.data.sections[3].values.map(
              (
                item: {
                  icon: string;
                  title: string;
                  subtitle: string;
                },
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
                  <div className="flex flex-col">
                    <h3 className="text-white text-base font-semibold">
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
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[5].name}
            </h2>

            <div className="w-[768px] border border-[#dbe1eb] rounded-md p-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
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
                    <p className="text-[16px] text-gray-800">{item.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* course exclusive feature */}
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data.sections[8].name}
            </h2>

            <div className="w-[768px] border border-[#dbe1eb] rounded-md p-4 grid grid-cols-1 md:grid-cols-1 gap-y-3 gap-x-8 divide-black">
              {data.data.sections[8]?.values?.map((feature: any) => (
                <div key={feature.id} className="flex flex-row gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <ul className="list-none space-y-2">
                      {feature.checklist.map((item: any, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold text-xl">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {feature.file_type === "image" && feature.file_url && (
                    <Image
                      src={feature.file_url}
                      alt={feature.title}
                      width={300}
                      height={300}
                      className="mt-4 rounded ml-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mb-7 xs:bg-[#EEF2F4] xs:pt-2">
          <div className="bg-white pt-4 pb-2">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {data.data?.sections[7]?.name}
            </h2>

            <div className="space-y-4 rounded-lg py-2 md:border md:px-5 w-[768px]">
              {data.data?.sections[7]?.values.map((e: any, i: any) => (
                <details
                  className="mb-0 border-[#dbe1eb] border-b border-dashed last:border-none"
                  key={i}>
                  <summary className="cursor-pointer px-4 py-3 text-base font-medium">
                    <b>{stripHtmlTags(e?.title)}</b>
                  </summary>
                  <div
                    className="px-4 py-3 text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: e?.description }}></div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
