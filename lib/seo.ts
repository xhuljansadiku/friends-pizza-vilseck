import type { Metadata } from "next";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, localePath, locales, type Locale } from "@/lib/i18n";

/** Absolute URLs of one page in every language, for hreflang and sitemaps. */
export function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${business.url}${localePath(locale, path)}`;
  }
  languages["x-default"] = `${business.url}${localePath(defaultLocale, path)}`;
  return languages;
}

type PageMetadataInput = {
  locale: Locale;
  path: string;
  title?: string;
  description?: string;
};

export function pageMetadata({ locale, path, title, description }: PageMetadataInput): Metadata {
  const dict = getDictionary(locale);
  const url = localePath(locale, path);
  const ogTitle = title ? `${title} | ${business.name} Vilseck` : dict.meta.siteTitle;
  const ogDescription = description ?? dict.meta.siteDescription;

  return {
    ...(title ? { title } : {}),
    description: ogDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      url,
      siteName: business.name,
      title: ogTitle,
      description: ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}
