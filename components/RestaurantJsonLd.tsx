import { business, deliveryArea, menu, openingHours } from "@/lib/content";
import { localePath, t, type Locale } from "@/lib/i18n";

// Rendered by each main page rather than the layout (as the Next.js JSON-LD guide
// recommends), so the 404 page doesn't carry it.
function restaurantJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    image: `${business.url}/logo.png`,
    url: `${business.url}${localePath(locale, "/")}`,
    sameAs: Object.values(business.social),
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
    currenciesAccepted: "EUR, USD",
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

export function RestaurantJsonLd({ locale }: { locale: Locale }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escape "<" so menu text can never close the script tag early
        __html: JSON.stringify(restaurantJsonLd(locale)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
