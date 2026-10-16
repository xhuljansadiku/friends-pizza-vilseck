export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string that differs per language. Plain strings are shared by all locales. */
export type Localized = string | Record<Locale, string>;

export function t(value: Localized, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

/**
 * Public URL path for a page in a locale. English is the default and has no
 * prefix (/menu); German lives under /de (/de/menu).
 */
export function localePath(locale: Locale, path = "/") {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

const priceFormats: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }),
  de: new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }),
};

export function formatPrice(value: number, locale: Locale) {
  return priceFormats[locale].format(value);
}
