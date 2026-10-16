import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MenuBoard } from "@/components/MenuBoard";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/menu">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return pageMetadata({ locale: lang, path: "/menu", title: meta.menuTitle, description: meta.menuDescription });
}

export default async function MenuPage({ params }: PageProps<"/[lang]/menu">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <MenuBoard locale={lang} headingAs="h1" />;
}
