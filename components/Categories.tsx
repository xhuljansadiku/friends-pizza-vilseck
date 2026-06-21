import { Reveal } from "@/components/Reveal";
import {
  PizzaIcon,
  BurgerIcon,
  PastaIcon,
  SaladIcon,
  DrinkIcon,
} from "@/components/illustrations/icons";
import { categories } from "@/lib/content";

const iconMap = {
  pizza: PizzaIcon,
  burgers: BurgerIcon,
  pasta: PastaIcon,
  salads: SaladIcon,
  drinks: DrinkIcon,
} as const;

export function Categories() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-(--container-page)">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category, i) => {
            const Icon = iconMap[category.id];
            return (
              <Reveal key={category.id} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-ink/10 py-8 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-gold">
                  <Icon className="h-12 w-12 text-ink" />
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {category.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
