import { MapPin } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { Leader } from "@/components/ui/Leader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { business, hours } from "@/lib/content";

export function LocationHours() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.address.full
  )}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    business.address.full
  )}`;

  return (
    <section id="location" className="bg-char px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-(--container-page) gap-12 md:grid-cols-2">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">Find us</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            On the Marktplatz.
          </h2>
          <p className="mt-4 flex items-start justify-center gap-2 font-body text-cream/70 md:justify-start">
            <MapPin size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            {business.address.line1}, {business.address.line2}
          </p>

          <div className="mt-8 divide-y divide-cream/10">
            <Leader
              tone="cream"
              label={hours.guests.label}
              value={hours.guests.value}
              available={hours.guests.available}
            />
            <Leader
              tone="cream"
              label={hours.delivery.label}
              value={hours.delivery.value}
              available={hours.delivery.available}
            />
            <Leader
              tone="cream"
              label={hours.pickup.label}
              value={hours.pickup.value}
              available={hours.pickup.available}
            />
          </div>

          <div className="mt-8 text-center md:text-left">
            <Button href={directionsUrl} external variant="primary">
              Get directions
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
              title={`Map showing ${business.name} location`}
              className="block h-[420px] w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
