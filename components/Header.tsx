"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/MobileNav";
import { business } from "@/lib/content";

const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          <Image
            src="/logo.png"
            alt={business.name}
            width={155}
            height={36}
            className="h-9 w-[155px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-display text-sm font-semibold uppercase tracking-wide text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={business.orderUrl} external variant="primary">
            Order online
          </Button>
        </div>

        <button
          ref={triggerRef}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 md:hidden"
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} triggerRef={triggerRef} />
    </header>
  );
}
