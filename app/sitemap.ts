import type { MetadataRoute } from "next";
import { business } from "@/lib/content";
import { locales, localePath } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/menu", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: `${business.url}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
