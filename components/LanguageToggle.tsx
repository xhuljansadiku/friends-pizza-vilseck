"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { alternatePath } from "@/lib/navigation";
import { locales, type Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
  tone?: "ink" | "cream";
  onNavigate?: () => void;
};

export function LanguageToggle({ locale, label, tone = "ink", onNavigate }: LanguageToggleProps) {
  const segment = useSelectedLayoutSegment();
  const border = tone === "ink" ? "border-ink" : "border-cream/40";
  const idle = tone === "ink" ? "text-ink hover:bg-ink/5" : "text-cream hover:bg-cream/10";

  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex overflow-hidden rounded-full border-2 ${border} font-mono text-xs font-bold uppercase`}
    >
      {locales.map((option) => {
        const active = option === locale;
        return (
          <Link
            key={option}
            href={alternatePath(option, segment)}
            hrefLang={option}
            lang={option}
            onClick={onNavigate}
            aria-current={active ? "true" : undefined}
            className={`flex min-h-9 min-w-11 items-center justify-center px-3 transition-colors ${
              active ? "bg-gold text-ink" : idle
            }`}
          >
            {option}
          </Link>
        );
      })}
    </div>
  );
}
