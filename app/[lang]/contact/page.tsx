import type { Metadata } from "next";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { LocationHours } from "@/components/LocationHours";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/contact", title: meta.contactTitle, description: meta.contactDescription });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <RestaurantJsonLd locale={lang} />
      <Contact locale={lang} headingAs="h1" />
      <LocationHours locale={lang} />
    </>
  );
}
