import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { MenuItemRow } from "@/components/MenuItemRow";
import Link from "next/link";
import { business, menu } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

const featured = [
  "Supreme",
  "Pepperoni",
  "Margherita",
  "Friends Pizza",
  "BBQ Chicken",
  "Quattro Formaggi",
];

export function MenuPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pizzas = menu.find((category) => category.id === "pizza")?.items ?? [];
  const items = featured.flatMap((name) => pizzas.filter((item) => item.name === name));
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <section className="surface-dark bg-char px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">{dict.menuPreview.stamp}</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            {dict.menuPreview.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-cream/70 md:mx-0">
            {dict.menuPreview.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {columns.map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 0.1}>
              <div className="divide-y divide-cream/10">
                {column.map((item) => (
                  <MenuItemRow
                    key={JSON.stringify(item.name)}
                    item={item}
                    locale={locale}
                    bestsellerLabel={dict.common.bestseller}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
          <Button href={business.orderUrl} external variant="primary">
            {dict.nav.order}
          </Button>
          <Link
            href={localePath(locale, "/menu")}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-cream px-6 py-3 font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-cream hover:text-coal"
          >
            {dict.common.fullMenu}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
