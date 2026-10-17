"use client";

import { motion } from "framer-motion";
import { Bike, DollarSign, Euro, Phone, Star } from "lucide-react";
import { OpeningStatus } from "@/components/OpeningHours";
import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { business, googleReviews } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type HeroProps = {
  copy: Dictionary["hero"];
  statusLabels: Dictionary["status"];
  orderLabel: string;
  menuLabel: string;
  menuHref: string;
  /** Google rating as shown in this locale, e.g. "5,0" */
  ratingText: string;
  /** Cheapest pizza, already formatted, e.g. "9,90 €" */
  priceFrom: string;
};

export function Hero({
  copy,
  statusLabels,
  orderLabel,
  menuLabel,
  menuHref,
  ratingText,
  priceFrom,
}: HeroProps) {
  const rating = copy.rating
    .replace("{rating}", ratingText)
    .replace("{count}", String(googleReviews.count));
  const quickFacts = [
    { icons: [Bike], label: copy.factDelivery },
    { icons: [Euro, DollarSign], label: copy.factPayment },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-10 md:pt-20 md:pb-12">
      <div className="mx-auto grid max-w-(--container-page) items-center gap-12 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.div variants={textVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Stamp>{copy.stamp}</Stamp>
          </motion.div>

          <motion.h1
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl"
          >
            {copy.titleStart}
            <br />
            {copy.titleEnd} <span className="rounded-md bg-gold px-2 py-0.5 text-coal">Friends</span>.
          </motion.h1>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-5 max-w-md font-body text-lg text-ink/70"
          >
            {copy.intro}
          </motion.p>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6"
          >
            <OpeningStatus
              labels={statusLabels}
              fallback={copy.factHours}
              className="rounded-full border border-ink/15 bg-ink/[0.04] px-3.5 py-1.5 font-body text-sm font-semibold text-ink"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button href={business.orderUrl} external variant="primary">
              {orderLabel}
            </Button>
            <Button href={menuHref} variant="secondary">
              {menuLabel}
            </Button>
          </motion.div>

          <motion.a
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // Mobile already has a call button in the sticky bottom bar
            href={`tel:${business.phoneHref}`}
            className="mt-4 hidden md:inline-flex items-center gap-2 font-body text-sm text-ink/70 transition-colors hover:text-ink"
          >
            <Phone size={14} aria-hidden="true" />
            {copy.callPrefix}{" "}
            <span className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
              {business.phone}
            </span>
          </motion.a>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-x-5 gap-y-2.5 border-t border-ink/10 pt-6 font-body text-sm text-ink/75 sm:flex-row sm:flex-wrap md:justify-start"
          >
            <a
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-ink underline-offset-4 hover:underline sm:w-full sm:justify-center md:justify-start"
            >
              <Star size={16} className="fill-gold text-gold" aria-hidden="true" />
              {rating}
            </a>
            {quickFacts.map(({ icons, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex items-center" aria-hidden="true">
                  {icons.map((Icon, i) => (
                    <Icon key={i} size={16} className="text-gold" />
                  ))}
                </span>
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-ink shadow-[8px_8px_0_0_var(--color-gold)] rotate-2">
            <Image
              src="/images/friends-pizza-rucola.jpg"
              alt={copy.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 512px, 100vw"
              className="object-cover"
            />
          </div>
          <div
            className="surface-dark absolute -bottom-5 -left-3 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-dashed border-cream/40 bg-ink text-center text-cream shadow-lg ring-4 ring-ink md:-left-6 md:h-28 md:w-28"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-cream/70 md:text-xs">
              {copy.priceFrom}
            </span>
            <span className="font-display text-lg font-extrabold leading-tight text-gold md:text-xl">
              {priceFrom}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
