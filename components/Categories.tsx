import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  PizzaIcon,
  BurgerIcon,
  PastaIcon,
  SaladIcon,
  DrinkIcon,
} from "@/components/illustrations/icons";
import { featuredCategoryIds, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, t, type Locale } from "@/lib/i18n";

const iconMap = {
  pizza: PizzaIcon,
  burgers: BurgerIcon,
  pasta: PastaIcon,
  salads: SaladIcon,
  drinks: DrinkIcon,
} as const;

export function Categories({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="px-6 py-16 md:py-20" aria-label={dict.categories.label}>
      <div className="mx-auto max-w-(--container-page)">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {featuredCategoryIds.map((id, i) => {
            const Icon = iconMap[id];
            const category = menu.find((c) => c.id === id);
            if (!category) return null;
            return (
              <Reveal key={id} delay={i * 0.06}>
                <Link
                  href={`${localePath(locale, "/menu")}#menu-${id}`}
                  className="flex flex-col items-center gap-3 rounded-2xl border-2 border-ink/10 py-8 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-gold"
                >
                  <Icon className="h-12 w-12 text-ink" />
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {t(category.label, locale)}
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
