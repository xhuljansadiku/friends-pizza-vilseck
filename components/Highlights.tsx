import Link from "next/link";
import { ArrowRight, Bike, Clock, Pizza } from "lucide-react";
import { TicketCard } from "@/components/ui/TicketCard";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

const rotations: Array<"left" | "none" | "right"> = ["left", "none", "right"];

// Same order as `highlights` in the dictionary: delivery, pizza sizes, opening hours.
const cardMeta = [
  { icon: Bike, path: "/contact#location" },
  { icon: Pizza, path: "/menu#menu-pizza" },
  { icon: Clock, path: "/contact#location" },
];

export function Highlights({ locale }: { locale: Locale }) {
  const { highlights, highlightsTitle } = getDictionary(locale);

  return (
    <section className="px-6 py-16 md:py-20" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="sr-only">
        {highlightsTitle}
      </h2>
      <div className="mx-auto grid max-w-(--container-page) gap-6 md:grid-cols-3">
        {highlights.map((item, i) => {
          const { icon: Icon, path } = cardMeta[i];
          return (
            <Reveal key={item.title} delay={i * 0.1}>
              <Link href={localePath(locale, path)} className="group block h-full rounded-2xl">
                <TicketCard rotate={rotations[i]} className="flex h-full flex-col group-hover:border-gold">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                      {item.fact}
                    </span>
                    <Icon size={26} className="shrink-0 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 font-body text-sm text-ink/70">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-sm font-semibold text-ink transition-colors group-hover:text-gold-deep">
                    {item.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </TicketCard>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
