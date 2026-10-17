"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { PizzaIcon } from "@/components/illustrations/icons";
import type { Locale } from "@/lib/i18n";

type Content = {
  locale: Locale;
  stamp: string;
  title: string;
  text: string;
  home: string;
  menu: string;
  homeHref: string;
  menuHref: string;
};

export function NotFoundContent({ content }: { content: Content[] }) {
  const pathname = usePathname();
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const copy = content.find((c) => c.locale === (isGerman ? "de" : "en")) ?? content[0];

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <PizzaIcon className="h-16 w-16 -rotate-12 text-gold" aria-hidden="true" />
        <Stamp className="mt-6">{copy.stamp}</Stamp>
        <h1 className="mt-6 font-display text-4xl font-extrabold text-ink md:text-5xl">{copy.title}</h1>
        <p className="mt-4 font-body text-lg text-ink/70">{copy.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={copy.homeHref} variant="primary">
            {copy.home}
          </Button>
          <Link
            href={copy.menuHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            {copy.menu}
          </Link>
        </div>
      </div>
    </section>
  );
}
