import { Stamp } from "@/components/ui/Stamp";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type AboutProps = {
  locale: Locale;
  headingAs?: "h1" | "h2";
};

export function About({ locale, headingAs: Heading = "h2" }: AboutProps) {
  const { about } = getDictionary(locale);

  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-(--container-page) items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-ink -rotate-2 shadow-[-8px_8px_0_0_var(--color-gold)]">
            <Image
              src="/images/pizza-dough-kitchen.jpg"
              alt={about.imageAlt}
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="text-center md:text-left">
          <Stamp>{about.stamp}</Stamp>
          <Heading className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            {about.title}
          </Heading>
          <p className="mt-5 font-body text-lg text-ink/70">{about.p1}</p>
          <p className="mt-4 font-body text-lg text-ink/70">{about.p2}</p>
        </Reveal>
      </div>
    </section>
  );
}
