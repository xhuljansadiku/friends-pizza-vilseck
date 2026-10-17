import { notFound } from "next/navigation";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Categories } from "@/components/Categories";
import { Gallery } from "@/components/Gallery";
import { MenuPreview } from "@/components/MenuPreview";
import { Testimonials } from "@/components/Testimonials";
import { LocationHours } from "@/components/LocationHours";
import { googleReviews, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { formatPrice, hasLocale, localePath } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const pizzas = menu.find((c) => c.id === "pizza")?.items.filter((item) => item.priceXl) ?? [];
  const cheapestPizza = Math.min(...pizzas.map((item) => item.price));

  return (
    <>
      <RestaurantJsonLd locale={lang} />
      <Hero
        copy={dict.hero}
        statusLabels={dict.status}
        orderLabel={dict.nav.order}
        menuLabel={dict.common.viewMenu}
        menuHref={localePath(lang, "/menu")}
        ratingText={lang === "de" ? googleReviews.rating.replace(".", ",") : googleReviews.rating}
        priceFrom={formatPrice(cheapestPizza, lang)}
      />
      <Highlights locale={lang} />
      <Categories locale={lang} />
      <Gallery locale={lang} />
      <MenuPreview locale={lang} />
      <Testimonials locale={lang} />
      <LocationHours locale={lang} />
    </>
  );
}
