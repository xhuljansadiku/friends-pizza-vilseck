"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";
import type { NavLink } from "@/lib/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  links: NavLink[];
  activeSegment: string | null;
  nav: Dictionary["nav"];
};

export function MobileNav({ open, onClose, triggerRef, links, activeSegment, nav }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={nav.siteNavigation}
          ref={dialogRef}
          className="surface-dark fixed inset-0 z-50 bg-ink md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex h-full flex-col px-6 py-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between">
              <ThemeToggle label={nav.toggleTheme} tone="cream" />
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label={nav.closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full text-cream hover:bg-cream/10"
              >
                <X size={26} aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-12 flex flex-1 flex-col gap-2" aria-label="Primary">
              {links.map((item) => {
                const active = item.segment === activeSegment;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center border-b border-cream/10 py-4 font-display text-2xl font-semibold transition-colors hover:text-gold ${
                      active ? "text-gold" : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Button href={business.orderUrl} external variant="primary" className="w-full">
              {nav.order}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
