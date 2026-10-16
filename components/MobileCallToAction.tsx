import { Phone, ExternalLink } from "lucide-react";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function MobileCallToAction({ locale }: { locale: Locale }) {
  const { common } = getDictionary(locale);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${business.phoneHref}`}
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink font-display text-sm font-semibold text-ink transition-transform active:scale-[0.97]"
      >
        <Phone size={18} aria-hidden="true" />
        {common.callUs}
      </a>
      <a
        href={business.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold font-display text-sm font-semibold text-coal transition-transform active:scale-[0.97]"
      >
        {common.orderNow}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
