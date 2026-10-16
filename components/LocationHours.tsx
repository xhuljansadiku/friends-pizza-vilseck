import { MapPin } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { Leader } from "@/components/ui/Leader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { business, openingHours } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function LocationHours({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { location } = dict;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.address.full
  )}&hl=${locale}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.address.full
  )}`;
  const open = `${openingHours.opens} – ${openingHours.closes}`;

  const hoursRows = [
    { label: location.days.monWed, value: open },
    { label: location.days.thu, value: dict.common.closed },
    { label: location.days.friSun, value: open },
  ];
  const serviceRows = [
    { label: location.deliveryLabel, value: location.deliveryValue },
    { label: location.pickupLabel, value: location.pickupValue },
    { label: location.paymentLabel, value: location.paymentValue },
  ];

  return (
    <section id="location" className="bg-char px-6 py-20 md:py-28">
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
          <div className="mt-2 divide-y divide-cream/10 text-left">
            {hoursRows.map((row) => (
              <Leader key={row.label} tone="cream" label={row.label} value={row.value} />
            ))}
          </div>

          <h3 className="mt-8 font-mono text-xs font-bold uppercase tracking-wider text-gold">
            {location.serviceTitle}
          </h3>
          <div className="mt-2 divide-y divide-cream/10 text-left">
            {serviceRows.map((row) => (
              <Leader key={row.label} tone="cream" label={row.label} value={row.value} />
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
            <iframe
              src={mapSrc}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={location.mapTitle}
              className="block h-[420px] w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
