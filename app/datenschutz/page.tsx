import type { Metadata } from "next";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: `Datenschutzerklärung | ${business.name}`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl font-extrabold text-ink">
        Datenschutzerklärung
      </h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/50">
        Placeholder. Please have a full DSGVO-compliant policy drafted before launch.
      </p>

      <div className="mt-8 space-y-6 font-body text-ink/80">
        <section>
          <h2 className="font-display font-bold text-ink">Verantwortlicher</h2>
          <p>{business.name}</p>
          <p>{business.address.line1}</p>
          <p>{business.address.line2}</p>
          <p>E-Mail: {business.email}</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Hosting & Server-Logs</h2>
          <p>
            Beim Besuch dieser Website werden durch den Hosting-Anbieter
            automatisch Informationen in Server-Log-Dateien erfasst (z. B.
            IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten werden nicht
            mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre
            Angaben zur Bearbeitung der Anfrage gespeichert.
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Löschung oder Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten.
          </p>
        </section>
      </div>
    </main>
  );
}
