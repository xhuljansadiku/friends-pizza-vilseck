import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum | ${business.name}`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-extrabold text-ink">Impressum</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/50">
        Angaben gemäß § 5 TMG. Placeholder, please complete before launch.
      </p>

      <div className="mt-8 space-y-6 font-body text-ink/80">
        <section>
          <h2 className="font-display font-bold text-ink">{business.name}</h2>
          <p>{business.address.line1}</p>
          <p>{business.address.line2}</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Kontakt</h2>
          <p>Telefon: {business.phone}</p>
          <p>E-Mail: {business.email}</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Vertretungsberechtigte Person</h2>
          <p className="text-ink/50">[Name des Geschäftsführers / Inhabers einfügen]</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Umsatzsteuer-ID</h2>
          <p className="text-ink/50">[USt-IdNr. einfügen, falls vorhanden]</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet
            und nicht bereit, an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
}
