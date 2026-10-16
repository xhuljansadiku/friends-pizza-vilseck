import { Leader } from "@/components/ui/Leader";
import type { MenuItem } from "@/lib/content";
import { formatPrice, t, type Locale } from "@/lib/i18n";

type MenuItemRowProps = {
  item: MenuItem;
  locale: Locale;
  bestsellerLabel: string;
};

export function MenuItemRow({ item, locale, bestsellerLabel }: MenuItemRowProps) {
  const price = item.priceXl
    ? `${formatPrice(item.price, locale)} / ${formatPrice(item.priceXl, locale)}`
    : formatPrice(item.price, locale);
  const description =
    [item.portion && t(item.portion, locale), item.description && t(item.description, locale)]
      .filter(Boolean)
      .join(" · ") || undefined;

  return (
    <Leader
      tone="cream"
      label={t(item.name, locale)}
      description={description}
      value={price}
      tag={item.tag === "bestseller" ? bestsellerLabel : undefined}
    />
  );
}
