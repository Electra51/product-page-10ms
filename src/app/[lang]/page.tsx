import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

type Props = {
  params: {
    lang: string;
  };
};

export default async function Page({ params }: Props) {
  const lang = params?.lang;

  if (!["en", "bn"].includes(lang)) return notFound();

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
    }
  );

  if (!res.ok) return notFound();

  const product = await res.json();

  const description =
    typeof product.description === "string" ? product.description : null;

  return (
    <main className="px-6 py-4">
      <h1 className="text-3xl font-bold text-red-600">{product.title}</h1>

      {description && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </main>
  );
}
