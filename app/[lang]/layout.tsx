import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { sora, inter, spaceMono } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallToAction } from "@/components/MobileCallToAction";
import { CookieBanner } from "@/components/Consent";
import { BackToTop } from "@/components/BackToTop";
import { MotionProvider } from "@/components/MotionProvider";
import { themeInitScript } from "@/lib/theme";
import { business } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath, locales } from "@/lib/i18n";
import { getNavLinks } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(business.url),
    title: {
      default: dict.meta.siteTitle,
      template: `%s | ${business.name} Vilseck`,
    },
    ...pageMetadata({ locale: lang, path: "/" }),
  };
}


export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-coal"
        >
          {dict.nav.skipToContent}
        </a>
        <MotionProvider>
          <Header
            locale={lang}
            links={getNavLinks(lang, dict.nav)}
            nav={dict.nav}
            drawer={{
              status: dict.status,
              statusFallback: dict.hero.factHours,
              callUs: dict.common.callUs,
              getDirections: dict.common.getDirections,
              followOn: dict.contact.followOn,
            }}
          />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={lang} />
          <MobileCallToAction locale={lang} />
          <BackToTop label={dict.nav.backToTop} />
          <CookieBanner labels={dict.cookies} privacyHref={localePath(lang, "/datenschutz")} />
        </MotionProvider>
      </body>
    </html>
  );
}
