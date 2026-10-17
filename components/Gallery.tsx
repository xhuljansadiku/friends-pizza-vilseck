import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { Reveal } from "@/components/Reveal";
import { categorySummary, directionsUrl, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { formatPrice, localePath, type Locale } from "@/lib/i18n";

// Same order as `gallery.items` in the dictionary. Food cards link to their
// menu section; the storefront opens directions.
const cards = [
  { photo: "/images/pizza-dough-kitchen.jpg", position: "object-center", categoryId: "pizza" },
  { photo: "/images/burger.jpg", position: "object-center", categoryId: "burgers" },
  { photo: "/images/storefront-marktplatz-vilseck.jpg", position: "object-center", categoryId: null },
] as const;

export function Gallery({ locale }: { locale: Locale }) {
  const { gallery } = getDictionary(locale);

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp>{gallery.stamp}</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-ink md:text-5xl">
            {gallery.title}
          </h2>
        </Reveal>

        {/* Swipe row on phones (next card peeks in), three columns from md up */}
        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {gallery.items.map((item, i) => {
            const { photo, position, categoryId } = cards[i];
            const category = categoryId ? menu.find((c) => c.id === categoryId) : undefined;
            const summary = category ? categorySummary(category) : undefined;
            const meta = summary
              ? item.meta
                  .replace("{count}", String(summary.count))
                  .replace("{price}", formatPrice(summary.from, locale))
              : item.meta;
            const external = categoryId === null;
            const Arrow = external ? ArrowUpRight : ArrowRight;

            const content = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 80vw"
                    className={`object-cover ${position} transition-transform duration-500 ease-out group-hover:scale-105`}
                  />
                  {external && (
                    <span className="surface-dark absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-cream">
                      <MapPin size={12} className="text-gold" aria-hidden="true" />
                      Vilseck
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold text-ink">{item.title}</p>
                    <p className="font-mono text-xs text-ink/60">{meta}</p>
                  </div>
                  <Arrow
                    size={20}
                    className="shrink-0 text-ink/40 transition-all group-hover:translate-x-0.5 group-hover:text-gold-deep"
                    aria-hidden="true"
                  />
                </div>
              </>
            );

            const cardClass =
              "group block h-full overflow-hidden rounded-2xl border-2 border-ink/10 transition-colors hover:border-gold";

            return (
              <Reveal key={photo} delay={i * 0.1} className="w-[80%] shrink-0 snap-start sm:w-[55%] md:w-auto">
                {external ? (
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {content}
                  </a>
                ) : (
                  <Link href={`${localePath(locale, "/menu")}#menu-${categoryId}`} className={cardClass}>
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
