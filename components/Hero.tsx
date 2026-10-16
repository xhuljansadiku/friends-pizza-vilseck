"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Bike } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { HeroPizza } from "@/components/illustrations/HeroPizza";
import { business } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type HeroProps = {
  copy: Dictionary["hero"];
  orderLabel: string;
  menuLabel: string;
  menuHref: string;
};

export function Hero({ copy, orderLabel, menuLabel, menuHref }: HeroProps) {
  const quickFacts = [
    { icon: MapPin, label: `${business.address.street}, ${business.address.city}` },
    { icon: Clock, label: copy.factHours },
    { icon: Bike, label: copy.factService },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-20 md:pt-20 md:pb-28">
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
            {copy.titleEnd} <span className="rounded-md bg-gold px-2 py-0.5">Friends</span>.
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
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button href={business.orderUrl} external variant="primary">
              {orderLabel}
            </Button>
            <Button href={menuHref} variant="secondary">
              {menuLabel}
            </Button>
          </motion.div>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink/70 sm:flex-row sm:gap-6 md:items-start"
          >
            {quickFacts.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-gold" aria-hidden="true" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-3xl"
            aria-hidden="true"
          />
          <HeroPizza className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
