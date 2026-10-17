import { MapPin } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { Leader } from "@/components/ui/Leader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { OpeningStatus, WeekHours } from "@/components/OpeningHours";
import { MapEmbed } from "@/components/Consent";
import { business, directionsUrl, openingHours } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function LocationHours({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { location } = dict;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.address.full
  )}&hl=${locale}&output=embed`;
  const open = `${openingHours.opens}-${openingHours.closes}`;
  const serviceRows = [
    { label: location.deliveryLabel, value: location.deliveryValue },
    { label: location.deliveryFeeLabel, value: location.deliveryFeeValue },
    { label: location.minimumOrderLabel, value: location.minimumOrderValue },
    { label: location.pickupLabel, value: location.pickupValue },
    { label: location.paymentLabel, value: location.paymentValue },
  ];

  return (
    <section id="location" className="surface-dark bg-char px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-(--container-page) gap-12 md:grid-cols-2">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">{location.stamp}</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            {location.title}
          </h2>
          <p className="mt-4 flex items-start justify-center gap-2 font-body text-cream/70 md:justify-start">
            <MapPin size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            {business.address.full}
          </p>

          <h3 className="mt-8 font-mono text-xs font-bold uppercase tracking-wider text-gold">
            {location.hoursTitle}
          </h3>
          <OpeningStatus
            labels={dict.status}
            fallback={dict.hero.factHours}
            className="mt-3 rounded-full border border-cream/15 bg-cream/[0.04] px-3.5 py-1.5 font-body text-sm font-semibold text-cream"
          />
          <div className="mt-5">
            <WeekHours labels={location} />
          </div>
          <p className="mt-3 font-body text-sm text-cream/60">
            {open} · {location.restDayNote}
          </p>

          <h3 className="mt-8 font-mono text-xs font-bold uppercase tracking-wider text-gold">
            {location.serviceTitle}
          </h3>
          <div className="mt-2 divide-y divide-cream/10 text-left">
            {serviceRows.map((row) => (
              <Leader key={row.label} tone="cream" label={row.label} value={row.value} wrapValue />
            ))}
          </div>

          <div className="mt-8 text-center md:text-left">
            <Button href={directionsUrl} external variant="primary">
              {dict.common.getDirections}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border-2 border-cream/20">
            <MapEmbed
              src={mapSrc}
              title={location.mapTitle}
              mapsUrl={directionsUrl}
              labels={dict.cookies}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
