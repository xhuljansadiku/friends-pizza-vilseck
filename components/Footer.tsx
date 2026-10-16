import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CookieSettingsButton } from "@/components/Consent";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { getNavLinks } from "@/lib/navigation";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const dict = getDictionary(locale);
  const links = getNavLinks(locale, dict.nav);

  return (
    <footer className="border-t border-ink/10 bg-cream px-6 py-12">
      <div className="mx-auto flex max-w-(--container-page) flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
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

        <p className="font-mono text-xs text-ink/60">
          {business.address.full}
        </p>

        <nav className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wide text-ink/60" aria-label={dict.footer.footerNav}>
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="flex gap-6 font-mono text-xs uppercase tracking-wide text-ink/60" aria-label={dict.footer.legalNav}>
          <Link href={localePath(locale, "/impressum")} className="hover:text-gold">
            Impressum
          </Link>
          <Link href={localePath(locale, "/datenschutz")} className="hover:text-gold">
            Datenschutz
          </Link>
          <CookieSettingsButton label={dict.cookies.footerLink} />
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-(--container-page) flex-col-reverse items-center gap-6 border-t border-ink/10 pt-8 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-ink/50">
          © {year} {business.name}. {dict.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <ThemeToggle label={dict.nav.toggleTheme} />
          <LanguageToggle locale={locale} label={dict.nav.switchLanguage} />
        </div>
      </div>
    </footer>
  );
}
