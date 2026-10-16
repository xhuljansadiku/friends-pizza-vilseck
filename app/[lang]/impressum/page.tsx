import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "/impressum";

export async function generateMetadata({ params }: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    ...pageMetadata({ locale: lang, path, title: "Impressum" }),
    robots: { index: false, follow: true },
  };
}

export default async function ImpressumPage({ params }: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { legal } = getDictionary(lang);

  return (
    <div lang="de" className="mx-auto max-w-2xl px-6 py-20">
      {legal.germanOnly && (
        <p lang={lang} className="mb-6 rounded-xl bg-gold/20 px-4 py-3 font-body text-sm text-ink">
          {legal.germanOnly}
        </p>
      )}
      <h1 className="font-display text-3xl font-extrabold text-ink">Impressum</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/50">
        Angaben gemäß § 5 DDG
      </p>

      <div className="mt-8 space-y-6 font-body text-ink/80">
        <section>
          <h2 className="font-display font-bold text-ink">Anbieter</h2>
          <p>Imbiss Abhol- und Lieferservice „{business.name}“</p>
          <p>Inhaber: Fatmir Fazliji</p>
          <p>{business.address.street}</p>
          <p>92249 Vilseck</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${business.phoneHref}`} className="hover:text-gold">
              +49 9662 3999705
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${business.email}`} className="hover:text-gold">
              {business.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">
            Angaben zur Berufshaftpflichtversicherung
          </h2>
          <p>Name und Sitz des Versicherers:</p>
          <p>Versicherungskammer Bayern</p>
          <p>Sparkasse Amberg-Sulzbach</p>
          <p>Marienstr. 10</p>
          <p>92224 Amberg</p>
          <p className="mt-2">Geltungsraum der Versicherung: Deutschland</p>
        </section>

        <section>
          <h2 className="font-display font-bold text-ink">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
