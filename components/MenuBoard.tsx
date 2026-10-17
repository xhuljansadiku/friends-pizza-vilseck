import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { MenuItemRow } from "@/components/MenuItemRow";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { allergenLegend, business, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { t, type Locale } from "@/lib/i18n";

/** Additives are numbered (1–8), allergens use letters (a–k). */
const isAdditive = (code: string) => code >= "0" && code <= "9";

type MenuBoardProps = {
  locale: Locale;
  headingAs?: "h1" | "h2";
};

export function MenuBoard({ locale, headingAs: Heading = "h2" }: MenuBoardProps) {
  const dict = getDictionary(locale);
  const CategoryHeading = Heading === "h1" ? "h2" : "h3";
  const navItems = [
    ...menu.map((category) => ({ id: `menu-${category.id}`, label: t(category.label, locale) })),
    { id: "allergens", label: dict.menu.allergensTitle },
  ];
  // Anchors land below the sticky header and the category bar.
  const anchorOffset = "scroll-mt-[calc(var(--header-h,72px)+5rem)]";
  const legendGroups = [
    { heading: dict.menu.additivesHeading, entries: allergenLegend.filter((e) => isAdditive(e.code)) },
    { heading: dict.menu.allergensHeading, entries: allergenLegend.filter((e) => !isAdditive(e.code)) },
  ];

  return (
    <section id="menu" className="surface-dark bg-char px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">{dict.menu.stamp}</Stamp>
          <Heading className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            {dict.menu.title}
          </Heading>
          <p className="mx-auto mt-3 max-w-md font-body text-cream/70 md:mx-0">
            {dict.menu.intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
            <Button href={business.orderUrl} external variant="primary">
              {dict.nav.order}
            </Button>
            <a
              href="#allergens"
              className="font-display text-sm font-semibold text-cream/80 underline decoration-gold decoration-2 underline-offset-4 hover:text-cream"
            >
              {dict.menu.allergensTitle} ↓
            </a>
          </div>
        </Reveal>

        <MenuCategoryNav items={navItems} label={dict.categories.label} />

        <div className="mt-10 gap-x-12 md:columns-2">
          {menu.map((category) => (
            <Reveal key={category.id} className="mb-12 break-inside-avoid">
              <div id={`menu-${category.id}`} className={anchorOffset}>
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
                      allergensLabel={dict.menu.allergensLabel}
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

        <div id="allergens" className={`mt-8 rounded-2xl border border-cream/10 p-5 text-left md:p-6 ${anchorOffset}`}>
          <CategoryHeading className="font-display text-base font-bold uppercase tracking-wide text-cream">
            {dict.menu.allergensTitle}
          </CategoryHeading>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {legendGroups.map((group) => (
              <div key={group.heading}>
                <p className="font-mono text-xs uppercase tracking-wider text-gold">{group.heading}</p>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                  {group.entries.map((entry) => (
                    <div key={entry.code} className="contents">
                      <dt className="font-mono font-bold text-cream">{entry.code}</dt>
                      <dd className="text-cream/70">{t(entry.label, locale)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-8 text-center md:text-left">
          <Button href={business.orderUrl} external variant="primary">
            {dict.nav.order}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
