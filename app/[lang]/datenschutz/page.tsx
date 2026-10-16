import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const path = "/datenschutz";

export async function generateMetadata({ params }: PageProps<"/[lang]/datenschutz">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    ...pageMetadata({ locale: lang, path, title: "Datenschutzerklärung" }),
    robots: { index: false, follow: true },
  };
}

// Adapted from the previous site's policy (e-recht24 template), trimmed to
// what this site actually does: hosting, phone/email contact, Google Maps
// embed, self-hosted fonts and a link to the external ordering service.
// Hoster: kept from the previous site. Update if the new site is deployed elsewhere.
const hoster = ["One.com", "Europaplatz 2", "10557 Berlin"];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-display font-bold text-ink">{title}</h3>
      {children}
    </div>
  );
}

function ExternalLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="break-all underline hover:text-gold">
      {href}
    </a>
  );
}

export default async function DatenschutzPage({ params }: PageProps<"/[lang]/datenschutz">) {
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
      <h1 className="font-display text-3xl font-extrabold text-ink">
        Datenschutzerklärung
      </h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/50">
        Stand: Oktober 2026
      </p>

      <div className="mt-10 space-y-10 font-body text-ink/80">
        <Section title="1. Datenschutz auf einen Blick">
          <Sub title="Allgemeine Hinweise">
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </Sub>
          <Sub title="Wer ist verantwortlich für die Datenerfassung auf dieser Website?">
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten finden Sie im Abschnitt
              „Hinweis zur verantwortlichen Stelle“ in dieser
              Datenschutzerklärung.
            </p>
          </Sub>
          <Sub title="Wie erfassen wir Ihre Daten?">
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen, z. B. wenn Sie uns per E-Mail oder Telefon
              kontaktieren.
            </p>
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs).
            </p>
          </Sub>
          <Sub title="Wofür nutzen wir Ihre Daten?">
            <p>
              Die Daten werden erhoben, um eine fehlerfreie Bereitstellung der
              Website zu gewährleisten und Ihre Anfragen zu bearbeiten. Wir
              setzen keine Analyse- oder Tracking-Tools ein.
            </p>
          </Sub>
          <Sub title="Welche Rechte haben Sie bezüglich Ihrer Daten?">
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </Sub>
        </Section>

        <Section title="2. Hosting">
          <Sub title="Externes Hosting">
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Hierbei handelt es sich v. a. um
              IP-Adressen, Meta- und Kommunikationsdaten sowie Websitezugriffe.
            </p>
            <p>
              Das externe Hosting erfolgt im Interesse einer sicheren,
              schnellen und effizienten Bereitstellung unseres Online-Angebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
              DSGVO). Unser Hoster verarbeitet Ihre Daten nur insoweit, wie dies
              zur Erfüllung seiner Leistungspflichten erforderlich ist, und
              befolgt unsere Weisungen in Bezug auf diese Daten.
            </p>
            <p>Wir setzen folgenden Hoster ein:</p>
            <p>
              {hoster.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Sub>
          <Sub title="Server-Log-Dateien">
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>
            <p>
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Wir haben ein berechtigtes Interesse an der technisch
              fehlerfreien Darstellung und der Optimierung unserer Website.
            </p>
          </Sub>
        </Section>

        <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
          <Sub title="Datenschutz">
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und
              behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet
              (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>
          </Sub>
          <Sub title="Hinweis zur verantwortlichen Stelle">
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              <span className="block">Fatmir Fazliji</span>
              <span className="block">{business.address.street}</span>
              <span className="block">92249 Vilseck, Deutschland</span>
            </p>
            <p>
              <span className="block">Telefon: +49 9662 3999705</span>
              <span className="block">
                E-Mail:{" "}
                <a href={`mailto:${business.email}`} className="hover:text-gold">
                  {business.email}
                </a>
              </span>
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </Sub>
          <Sub title="Speicherdauer">
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern wir
              keine anderen rechtlich zulässigen Gründe für die Speicherung
              haben (z. B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
              Löschung nach Fortfall dieser Gründe.
            </p>
          </Sub>
          <Sub title="Rechtsgrundlagen der Datenverarbeitung">
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, verarbeiten wir sie auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Zur Erfüllung einer
              rechtlichen Verpflichtung erfolgt die Verarbeitung auf Grundlage
              von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
              auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
              lit. f DSGVO erfolgen. Über die im Einzelfall einschlägigen
              Rechtsgrundlagen informieren die folgenden Absätze.
            </p>
          </Sub>
          <Sub title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
            <p>
              Sie können eine bereits erteilte Einwilligung jederzeit
              widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </Sub>
          <Sub title="Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)">
            <p className="font-semibold text-ink">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
              oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen,
              die sich aus Ihrer besonderen Situation ergeben, gegen die
              Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch für ein auf diese Bestimmungen
              gestütztes Profiling. Wenn Sie Widerspruch einlegen, werden wir
              Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten,
              es sei denn, wir können zwingende schutzwürdige Gründe für die
              Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen, oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="font-semibold text-ink">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung
              zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen
              die Verarbeitung zum Zwecke derartiger Werbung einzulegen; dies
              gilt auch für das Profiling, soweit es mit solcher Direktwerbung
              in Verbindung steht (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>
          </Sub>
          <Sub title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
            <p>
              Im Falle von Verstößen gegen die DSGVO steht Ihnen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem
              Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für uns
              zuständig ist das Bayerische Landesamt für Datenschutzaufsicht
              (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </Sub>
          <Sub title="Recht auf Datenübertragbarkeit">
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung an einen anderen Verantwortlichen verlangen,
              erfolgt dies nur, soweit es technisch machbar ist.
            </p>
          </Sub>
          <Sub title="Auskunft, Löschung und Berichtigung">
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen können Sie sich jederzeit an uns wenden.
            </p>
          </Sub>
          <Sub title="Recht auf Einschränkung der Verarbeitung">
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Dieses Recht besteht in
              folgenden Fällen:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten Daten
                bestreiten, für die Dauer der Überprüfung.
              </li>
              <li>
                Wenn die Verarbeitung unrechtmäßig geschah oder geschieht und
                Sie statt der Löschung die Einschränkung verlangen.
              </li>
              <li>
                Wenn wir Ihre Daten nicht mehr benötigen, Sie sie jedoch zur
                Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen.
              </li>
              <li>
                Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
                solange noch nicht feststeht, wessen Interessen überwiegen.
              </li>
            </ul>
            <p>
              Wenn Sie die Verarbeitung eingeschränkt haben, dürfen diese Daten
              – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung
              oder zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen
              natürlichen oder juristischen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses der Europäischen Union oder
              eines Mitgliedstaats verarbeitet werden.
            </p>
          </Sub>
          <Sub title="SSL- bzw. TLS-Verschlüsselung">
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers mit „https://“ beginnt
              und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
              Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
              übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </Sub>
        </Section>

        <Section title="4. Datenerfassung auf dieser Website">
          <Sub title="Anfrage per E-Mail oder Telefon">
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung
              der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Die Daten verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
              Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
              bleiben unberührt.
            </p>
          </Sub>
          <Sub title="Cookies">
            <p>
              Diese Website selbst setzt keine Cookies und verwendet keine
              Analyse- oder Tracking-Dienste. Beim Laden der eingebetteten
              Google-Maps-Karte kann Google eigene Cookies setzen (siehe
              Abschnitt 5).
            </p>
          </Sub>
        </Section>

        <Section title="5. Plugins, Tools und externe Dienste">
          <Sub title="Google Maps">
            <p>
              Diese Seite bindet den Kartendienst Google Maps ein. Anbieter ist
              die Google Ireland Limited („Google“), Gordon House, Barrow
              Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel
              an einen Server von Google in den USA übertragen und dort
              gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
              diese Datenübertragung.
            </p>
            <p>
              Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online-Angebote und einer
              leichten Auffindbarkeit unseres Standorts. Dies stellt ein
              berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
              dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
              erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p>
              Google ist nach dem „EU-US Data Privacy Framework“ (DPF)
              zertifiziert. Die Datenübertragung in die USA wird darauf sowie
              auf die Standardvertragsklauseln der EU-Kommission gestützt.
              Details finden Sie hier:{" "}
              <ExternalLink href="https://privacy.google.com/businesses/gdprcontrollerterms/" />
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <ExternalLink href="https://policies.google.com/privacy?hl=de" />
            </p>
          </Sub>
          <Sub title="Schriftarten">
            <p>
              Die auf dieser Website verwendeten Schriftarten sind lokal
              eingebunden. Beim Aufruf der Seite wird keine Verbindung zu
              Servern von Google oder anderen Schriftarten-Anbietern
              hergestellt.
            </p>
          </Sub>
          <Sub title="Online-Bestellung">
            <p>
              Für Online-Bestellungen verlinken wir auf einen externen
              Bestellservice ({new URL(business.orderUrl).hostname}). Erst wenn
              Sie diesen Link anklicken, verlassen Sie unsere Website und es
              werden Daten an den Betreiber des Bestellservice übermittelt. Für
              die dortige Datenverarbeitung gilt die Datenschutzerklärung des
              jeweiligen Anbieters.
            </p>
          </Sub>
        </Section>
      </div>
    </div>
  );
}
