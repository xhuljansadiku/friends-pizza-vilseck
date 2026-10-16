"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/MobileNav";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { business } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { NavLink } from "@/lib/navigation";

type HeaderProps = {
  locale: Locale;
  links: NavLink[];
  nav: Dictionary["nav"];
};

export function Header({ locale, links, nav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(10,10,10,0.08)]"
          : "bg-cream/0"
      }`}
    >
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6">
        <Link href={links[0].href} className="logo-plate flex items-center" aria-label={`${business.name} ${nav.home}`}>
          <Image
            src="/logo.png"
            alt={business.name}
            width={155}
            height={36}
            className="h-7 w-[121px] sm:h-9 sm:w-[155px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((item) => {
            const active = item.segment === segment;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative font-display text-sm font-semibold uppercase tracking-wide text-ink"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-200 group-hover:w-full ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle label={nav.toggleTheme} />
          <LanguageToggle locale={locale} label={nav.switchLanguage} />
          <Button href={business.orderUrl} external variant="primary">
            {nav.order}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle label={nav.toggleTheme} size="sm" />
          <LanguageToggle locale={locale} label={nav.switchLanguage} size="sm" />
          <button
            ref={triggerRef}
            onClick={() => setMenuOpen(true)}
            aria-label={nav.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
          >
            <Menu size={26} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={triggerRef}
        links={links}
        activeSegment={segment}
        nav={nav}
      />
    </header>
  );
}
