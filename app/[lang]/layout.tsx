import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sora, inter, spaceMono } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallToAction } from "@/components/MobileCallToAction";
import { CookieBanner } from "@/components/Consent";
import { themeInitScript } from "@/lib/theme";
import { business, deliveryArea, menu, openingHours } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath, locales, t, type Locale } from "@/lib/i18n";
import { getNavLinks } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(business.url),
    title: {
      default: dict.meta.siteTitle,
      template: `%s | ${business.name} Vilseck`,
    },
    ...pageMetadata({ locale: lang, path: "/" }),
  };
}

function restaurantJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    image: `${business.url}/logo.png`,
    url: `${business.url}${localePath(locale, "/")}`,
    telephone: business.phoneHref,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    servesCuisine: ["Pizza", "Burgers", "Pasta"],
    priceRange: "€",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "EUR",
    areaServed: deliveryArea.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingHours.days,
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    hasMenu: {
      "@type": "Menu",
      url: `${business.url}${localePath(locale, "/menu")}`,
      inLanguage: locale,
      hasMenuSection: menu.map((category) => ({
        "@type": "MenuSection",
        name: t(category.label, locale),
        hasMenuItem: category.items.map((item) => ({
          "@type": "MenuItem",
          name: t(item.name, locale),
          ...(item.description ? { description: t(item.description, locale) } : {}),
          offers: [
            { size: item.priceXl ? "M" : undefined, price: item.price },
            ...(item.priceXl ? [{ size: "XL", price: item.priceXl }] : []),
          ].map((offer) => ({
            "@type": "Offer",
            name: offer.size,
            price: offer.price.toFixed(2),
            priceCurrency: "EUR",
          })),
        })),
      })),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd(lang)) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-coal"
        >
          {dict.nav.skipToContent}
        </a>
        <Header locale={lang} links={getNavLinks(lang, dict.nav)} nav={dict.nav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} />
        <MobileCallToAction locale={lang} />
        <CookieBanner labels={dict.cookies} privacyHref={localePath(lang, "/datenschutz")} />
      </body>
    </html>
  );
}
