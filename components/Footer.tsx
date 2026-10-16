import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { getNavLinks } from "@/lib/navigation";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const dict = getDictionary(locale);
  const links = getNavLinks(locale, dict.nav);

  return (
    <footer className="bg-char px-6 py-12">
      <div className="mx-auto flex max-w-(--container-page) flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="rounded-2xl bg-cream px-5 py-3">
          <Image
            src="/logo.png"
            alt={business.name}
            width={140}
            height={32}
            className="h-8 w-[140px]"
          />
        </div>

        <p className="font-mono text-xs text-cream/60">
          {business.address.full}
        </p>

        <nav className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wide text-cream/60" aria-label={dict.footer.footerNav}>
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="flex gap-6 font-mono text-xs uppercase tracking-wide text-cream/60" aria-label={dict.footer.legalNav}>
          <Link href={localePath(locale, "/impressum")} className="hover:text-gold">
            Impressum
          </Link>
          <Link href={localePath(locale, "/datenschutz")} className="hover:text-gold">
            Datenschutz
          </Link>
        </nav>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-cream/40">
        © {year} {business.name}. {dict.footer.rights}
      </p>
    </footer>
  );
}
