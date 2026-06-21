import type { Metadata } from "next";
import { sora, inter, spaceMono } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallToAction } from "@/components/MobileCallToAction";
import { business, menu, openDays } from "@/lib/content";
import "./globals.css";

const siteUrl = "https://friends-pizza-vilseck.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Fresh pizza in Vilseck`,
    template: `%s | ${business.name}`,
  },
  description:
    "Friends Pizza on the Marktplatz in Vilseck, Bavaria. Fresh dough daily. Order online for delivery or pickup (closed Thursdays).",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Fresh pizza in Vilseck`,
    description:
      "Fresh pizza on the Marktplatz in Vilseck. Order online for delivery or pickup.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Fresh pizza in Vilseck`,
    description:
      "Fresh pizza on the Marktplatz in Vilseck. Order online for delivery or pickup.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  image: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: "Vilseck",
    postalCode: "92249",
    addressRegion: "Bavaria",
    addressCountry: "DE",
  },
  telephone: business.phone,
  email: business.email,
  servesCuisine: "Italian",
  priceRange: "€€",
  url: siteUrl,
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: menu.map((category) => ({
      "@type": "MenuSection",
      name: category.label,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace("€", ""),
          priceCurrency: "EUR",
        },
      })),
    })),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openDays,
      opens: "16:00",
      closes: "22:45",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallToAction />
      </body>
    </html>
  );
}
