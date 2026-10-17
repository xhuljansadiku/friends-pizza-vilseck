"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, ExternalLink, MapPin, Phone, X } from "lucide-react";
import { OpeningStatus, useOpeningState } from "@/components/OpeningHours";
import { FacebookIcon, InstagramIcon } from "@/components/SocialLinks";
import { business, directionsUrl } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";
import type { NavLink } from "@/lib/navigation";

/** Extra copy the drawer shows below the links. */
export type DrawerLabels = {
  status: Dictionary["status"];
  statusFallback: string;
  callUs: string;
  getDirections: string;
  followOn: string;
};

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  links: NavLink[];
  activeSegment: string | null;
  nav: Dictionary["nav"];
  labels: DrawerLabels;
};

/** Countdown is only worth showing when opening is a few hours away. */
const COUNTDOWN_MAX_MINUTES = 12 * 60;

function formatDuration(total: number, labels: DrawerLabels["status"]) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  const parts = [];
  if (h > 0) parts.push(`${h} ${labels.hoursUnit}`);
  if (m > 0 || h === 0) parts.push(`${m} ${labels.minutesUnit}`);
  return parts.join(" ");
}

const socials = [
  { name: "Instagram", Icon: InstagramIcon, href: business.social.instagram },
  { name: "Facebook", Icon: FacebookIcon, href: business.social.facebook },
];

export function MobileNav({ open, onClose, triggerRef, links, activeSegment, nav, labels }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const opening = useOpeningState();
  const closed = opening !== null && opening.status !== "open";
  const showCountdown = closed && opening.minutesUntilOpen <= COUNTDOWN_MAX_MINUTES;

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

  if (!mounted) return null;

  // Portal to <body>: the scrolled header uses backdrop-filter, which would
  // otherwise become the containing block for this fixed overlay.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="surface-dark fixed inset-0 z-50 md:hidden">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={nav.siteNavigation}
            ref={dialogRef}
            className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-ink px-6 text-cream shadow-2xl"
            style={{
              paddingTop: "max(1.25rem, env(safe-area-inset-top))",
              paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            // Swipe right to close
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80 || info.velocity.x > 500) onClose();
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <OpeningStatus
                labels={labels.status}
                fallback={labels.statusFallback}
                className="rounded-full border border-cream/15 px-3 py-1.5 text-xs text-cream/80"
              />
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label={nav.closeMenu}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:bg-cream/10 active:scale-95"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-10" aria-label="Primary">
              <ul>
                {links.map((item, i) => {
                  const active = item.segment === activeSegment;
                  return (
                    <motion.li
                      key={item.href}
                      className="border-b border-cream/10"
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="group flex min-h-16 items-center justify-between py-3"
                      >
                        <span
                          className={`font-mono text-xs transition-colors group-hover:text-gold ${
                            active ? "text-gold" : "text-cream/35"
                          }`}
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex items-center gap-3 font-display text-3xl font-semibold transition-colors group-hover:text-gold ${
                            active ? "text-gold" : "text-cream"
                          }`}
                        >
                          {active && <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />}
                          {item.label}
                        </span>
                      </Link>
                      </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              className="mt-auto pt-10"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-end gap-3 text-right"
              >
                <span>
                  <span className="block text-sm text-cream">
                    {business.address.street}, {business.address.postalCode} {business.address.city}
                  </span>
                  <span className="text-xs font-semibold text-gold group-hover:underline">
                    {labels.getDirections} →
                  </span>
                </span>
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              </a>

              {showCountdown && (
                <p
                  className="mt-6 flex items-center justify-end gap-2 text-right text-sm text-cream/80"
                  aria-live="polite"
                >
                  <Clock size={16} className="shrink-0 text-gold" aria-hidden="true" />
                  {labels.status.opensIn.replace(
                    "{time}",
                    formatDuration(opening.minutesUntilOpen, labels.status)
                  )}
                </p>
              )}

              <div className={`grid grid-cols-2 gap-2 ${showCountdown ? "mt-3" : "mt-6"}`}>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-cream/80 font-display text-sm font-semibold text-cream transition-transform active:scale-[0.97]"
                >
                  <Phone size={16} aria-hidden="true" />
                  {labels.callUs}
                </a>
                <a
                  href={business.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-h-12 items-center justify-center gap-2 rounded-full font-display text-sm font-semibold transition-transform active:scale-[0.97] ${
                    closed ? "border-2 border-gold text-gold" : "bg-gold text-coal"
                  }`}
                >
                  {nav.order}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>

              <ul className="mt-6 flex items-center justify-end gap-2">
                {socials.map(({ name, Icon, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={labels.followOn.replace("{network}", name)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-coal"
                    >
                      <Icon width={18} height={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
