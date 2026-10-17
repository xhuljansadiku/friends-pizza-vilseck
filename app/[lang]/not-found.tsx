import { NotFoundContent } from "@/components/NotFoundContent";
import { getDictionary } from "@/lib/dictionaries";
import { localePath } from "@/lib/i18n";

// not-found receives no params, so both languages are passed down and the
// client picks one from the URL.
export default function NotFound() {
  const content = (["en", "de"] as const).map((locale) => {
    const dict = getDictionary(locale);
    return {
      locale,
      ...dict.notFound,
      homeHref: localePath(locale, "/"),
      menuHref: localePath(locale, "/menu"),
    };
  });
  return <NotFoundContent content={content} />;
}
