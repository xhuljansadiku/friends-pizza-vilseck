import { Leader } from "@/components/ui/Leader";
import type { MenuItem } from "@/lib/content";
import { formatPrice, t, type Locale } from "@/lib/i18n";

type MenuItemRowProps = {
  item: MenuItem;
  locale: Locale;
  bestsellerLabel: string;
  /** Shows the allergen codes; pass it only where the legend is on the page. */
  allergensLabel?: string;
};

export function MenuItemRow({ item, locale, bestsellerLabel, allergensLabel }: MenuItemRowProps) {
  const price = item.priceXl
    ? `${formatPrice(item.price, locale)} / ${formatPrice(item.priceXl, locale)}`
    : formatPrice(item.price, locale);
  return (
    <Leader
      tone="cream"
      label={t(item.name, locale)}
      note={item.portion && t(item.portion, locale)}
      description={item.description && t(item.description, locale)}
      value={price}
      tag={item.tag === "bestseller" ? bestsellerLabel : undefined}
      footnote={allergensLabel ? item.allergens : undefined}
      footnoteLabel={allergensLabel}
    />
  );
}
