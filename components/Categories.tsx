import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Stamp } from "@/components/ui/Stamp";
import {
  PizzaIcon,
  BurgerIcon,
  PastaIcon,
  SaladIcon,
  DessertIcon,
  DrinkIcon,
} from "@/components/illustrations/icons";
import { categorySummary, featuredCategoryIds, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { formatPrice, localePath, t, type Locale } from "@/lib/i18n";

const iconMap = {
  pizza: PizzaIcon,
  burgers: BurgerIcon,
  pasta: PastaIcon,
  salads: SaladIcon,
  dessert: DessertIcon,
  drinks: DrinkIcon,
} as const;

export function Categories({ locale }: { locale: Locale }) {
  const { categories } = getDictionary(locale);

  return (
    <section className="px-6 pb-16 pt-4 md:pb-20 md:pt-6" aria-labelledby="categories-title">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp>{categories.stamp}</Stamp>
          <h2
            id="categories-title"
            className="mt-5 font-display text-3xl font-extrabold text-ink md:text-4xl"
          >
            {categories.title}
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {featuredCategoryIds.map((id, i) => {
            const Icon = iconMap[id];
            const category = menu.find((c) => c.id === id);
            if (!category) return null;
            const { count, from } = categorySummary(category);
            return (
              <Reveal key={id} delay={i * 0.06}>
                <Link
                  href={`${localePath(locale, "/menu")}#menu-${id}`}
                  className="flex h-full flex-col items-center gap-3 rounded-2xl border-2 border-ink/10 px-2 py-7 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-gold"
                >
                  <Icon className="h-12 w-12 text-ink" aria-hidden="true" />
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {t(category.label, locale)}
                  </span>
                  <span className="-mt-1.5 font-body text-xs text-ink/60">
                    {categories.meta
                      .replace("{count}", String(count))
                      .replace("{price}", formatPrice(from, locale))}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
