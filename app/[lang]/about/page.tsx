import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { Testimonials } from "@/components/Testimonials";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/about", title: meta.aboutTitle, description: meta.aboutDescription });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <About locale={lang} headingAs="h1" />
      <Highlights locale={lang} />
      <Testimonials locale={lang} />
    </>
  );
}
