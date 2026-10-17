import { Phone, Mail } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { TicketCard } from "@/components/ui/TicketCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type ContactProps = {
  locale: Locale;
  headingAs?: "h1" | "h2";
};

export function Contact({ locale, headingAs: Heading = "h2" }: ContactProps) {
  const dict = getDictionary(locale);
  const [emailUser, emailDomain] = business.email.split("@");
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page) text-center">
        <Reveal>
          <Stamp>{dict.contact.stamp}</Stamp>
          <Heading className="mt-6 font-display text-4xl font-extrabold text-ink md:text-5xl">
            {dict.contact.title}
          </Heading>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mx-auto sm:max-w-2xl sm:grid-cols-2">
          <Reveal delay={0.05}>
            <a href={`tel:${business.phoneHref}`} className="block">
              <TicketCard rotate="left" className="flex items-center gap-4 text-left">
                <Phone size={24} className="shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/60">{dict.contact.call}</p>
                  <p className="font-display text-lg font-bold text-ink">{business.phone}</p>
                </div>
              </TicketCard>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={`mailto:${business.email}`} className="block">
              <TicketCard rotate="right" className="flex items-center gap-4 text-left">
                <Mail size={24} className="shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/60">{dict.contact.email}</p>
                  {/* If it has to wrap, wrap after the @ rather than mid-word */}
                  <p className="font-display text-base font-bold text-ink sm:text-lg">
                    {emailUser}@<wbr />
                    {emailDomain}
                  </p>
                </div>
              </TicketCard>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-10 flex flex-col items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/60">
            {dict.contact.follow}
          </p>
          <SocialLinks labelTemplate={dict.contact.followOn} />
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <Button href={business.orderUrl} external variant="primary">
            {dict.nav.order}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
