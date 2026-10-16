import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { CookieSettingsButton } from "@/components/Consent";
import { SocialLinks } from "@/components/SocialLinks";
import { business, openingHours } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { getNavLinks } from "@/lib/navigation";

function ColumnTitle({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-gold">
      {children}
    </h2>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const dict = getDictionary(locale);
  const links = getNavLinks(locale, dict.nav);
  const hours = `${openingHours.opens}-${openingHours.closes}`;

  return (
    <footer className="border-t border-ink/10 bg-cream px-6 pb-24 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-(--container-page)">
        {/* Order call-to-action */}
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gold px-6 py-8 text-center text-coal md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <p className="font-display text-3xl font-extrabold md:text-4xl">
              {dict.footer.ctaTitle}
            </p>
            <p className="mt-1 font-body text-coal/80">{dict.footer.ctaText}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={business.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-coal px-6 font-display text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
            >
              {dict.nav.order}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-coal px-6 font-display text-sm font-semibold text-coal transition-colors hover:bg-coal hover:text-paper"
            >
              <Phone size={16} aria-hidden="true" />
              {dict.common.callUs}
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link
              href={links[0].href}
              aria-label={`${business.name} ${dict.nav.home}`}
              className="logo-plate flex items-center"
            >
              <Image
                src="/logo.png"
                alt={business.name}
                width={155}
                height={36}
                className="h-9 w-[155px]"
              />
            </Link>
            <p className="max-w-xs font-body text-sm text-ink/70">{dict.footer.tagline}</p>
            <SocialLinks labelTemplate={dict.contact.followOn} />
          </div>

          <div>
            <ColumnTitle>{dict.footer.visit}</ColumnTitle>
            <ul className="mt-4 space-y-3 font-body text-sm text-ink/80">
              <li className="flex items-start justify-center gap-2 sm:justify-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <Phone size={16} className="shrink-0 text-gold" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-2 break-all hover:text-gold"
                >
                  <Mail size={16} className="shrink-0 text-gold" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ColumnTitle>{dict.location.hoursTitle}</ColumnTitle>
            <dl className="mt-4 space-y-3 font-body text-sm">
              <div>
                <dt className="text-ink/60">{dict.footer.openDays}</dt>
                <dd className="font-semibold text-ink">{hours}</dd>
              </div>
              <div>
                <dt className="text-ink/60">{dict.footer.thursday}</dt>
                <dd>
                  <span className="mt-1 inline-block rounded-full bg-gold px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wide text-coal">
                    {dict.location.restDay}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label={dict.footer.footerNav}>
            <ColumnTitle>{dict.footer.pages}</ColumnTitle>
            <ul className="mt-4 space-y-3 font-body text-sm text-ink/80">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-ink/10 pt-6 text-center lg:flex-row lg:justify-between lg:pr-16 lg:text-left">
          <p className="font-mono text-xs text-ink/50">
            © {year} {business.name}. {dict.footer.rights}
          </p>
          <nav
            aria-label={dict.footer.legalNav}
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wide text-ink/60"
          >
            <Link href={localePath(locale, "/impressum")} className="hover:text-gold">
              Impressum
            </Link>
            <Link href={localePath(locale, "/datenschutz")} className="hover:text-gold">
              Datenschutz
            </Link>
            <CookieSettingsButton label={dict.cookies.footerLink} />
          </nav>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Designed &amp; Developed by{" "}
            <a
              href="https://illyrianpixel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ink transition-colors hover:text-gold"
            >
              Illyrian Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
