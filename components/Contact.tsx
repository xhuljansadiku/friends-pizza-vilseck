import { Phone, Mail } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { TicketCard } from "@/components/ui/TicketCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { business } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page) text-center">
        <Reveal>
          <Stamp>Get in touch</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-ink md:text-5xl">
            Order, ask, or just say hi.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-xl sm:mx-auto">
          <Reveal delay={0.05}>
            <a href={`tel:${business.phoneHref}`} className="block">
              <TicketCard rotate="left" className="flex items-center gap-4 text-left">
                <Phone size={24} className="shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/60">Call</p>
                  <p className="font-display text-lg font-bold text-ink">{business.phone}</p>
                </div>
              </TicketCard>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={`mailto:${business.email}`} className="block">
              <TicketCard rotate="right" className="flex items-center gap-4 text-left">
                <Mail size={24} className="shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/60">Email</p>
                  <p className="font-display text-lg font-bold text-ink break-all">
                    {business.email}
                  </p>
                </div>
              </TicketCard>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <Button href={business.orderUrl} external variant="primary">
            Order online
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
