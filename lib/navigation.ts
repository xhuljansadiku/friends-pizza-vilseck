import type { Dictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

/** Pages in the main navigation. `segment` is the route segment under app/[lang]. */
export const navPages = [
  { key: "home", path: "/", segment: null },
  { key: "menu", path: "/menu", segment: "menu" },
  { key: "about", path: "/about", segment: "about" },
  { key: "contact", path: "/contact", segment: "contact" },
] as const satisfies readonly {
  key: keyof Dictionary["nav"];
  path: string;
  segment: string | null;
}[];

export type NavLink = { href: string; label: string; segment: string | null };

export function getNavLinks(locale: Locale, nav: Dictionary["nav"]): NavLink[] {
  return navPages.map((page) => ({
    href: localePath(locale, page.path),
    label: nav[page.key],
    segment: page.segment,
  }));
}

/** Path of the current page in the other language, from the active segment. */
export function alternatePath(target: Locale, segment: string | null) {
  return localePath(target, segment ? `/${segment}` : "/");
}
