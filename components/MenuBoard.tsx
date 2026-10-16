import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { MenuItemRow } from "@/components/MenuItemRow";
import { business, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { t, type Locale } from "@/lib/i18n";

type MenuBoardProps = {
  locale: Locale;
  headingAs?: "h1" | "h2";
};

export function MenuBoard({ locale, headingAs: Heading = "h2" }: MenuBoardProps) {
  const dict = getDictionary(locale);
  const CategoryHeading = Heading === "h1" ? "h2" : "h3";

  return (
    <section id="menu" className="bg-char px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">{dict.menu.stamp}</Stamp>
          <Heading className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            {dict.menu.title}
          </Heading>
          <p className="mx-auto mt-3 max-w-md font-body text-cream/70 md:mx-0">
            {dict.menu.intro}
          </p>
        </Reveal>

        <div className="mt-12 gap-x-12 md:columns-2">
          {menu.map((category) => (
            <Reveal key={category.id} className="mb-12 break-inside-avoid">
              <div id={`menu-${category.id}`} className="scroll-mt-24">
                <div className="flex items-baseline justify-between gap-4 border-b-2 border-gold pb-2">
                  <CategoryHeading className="font-display text-2xl font-extrabold uppercase tracking-wide text-cream">
                    {t(category.label, locale)}
                  </CategoryHeading>
                  {category.note && (
                    <span className="text-right font-mono text-xs uppercase tracking-wider text-cream/60">
                      {t(category.note, locale)}
                    </span>
                  )}
                </div>
                <div className="divide-y divide-cream/10">
                  {category.items.map((item) => (
                    <MenuItemRow
                      key={JSON.stringify(item.name)}
                      item={item}
                      locale={locale}
                      bestsellerLabel={dict.common.bestseller}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center font-mono text-xs uppercase tracking-wider text-cream/60 md:text-left">
          {dict.menu.priceNote}
        </p>

        <Reveal delay={0.2} className="mt-8 text-center md:text-left">
          <Button href={business.orderUrl} external variant="primary">
            {dict.nav.order}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
