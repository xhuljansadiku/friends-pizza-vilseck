import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

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
          {business.address.line1}, {business.address.line2}
        </p>

        <nav className="flex gap-6 font-mono text-xs uppercase tracking-wide text-cream/60" aria-label="Legal">
          <Link href="/impressum" className="hover:text-gold">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-gold">
            Datenschutz
          </Link>
        </nav>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-cream/40">
        © {year} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
