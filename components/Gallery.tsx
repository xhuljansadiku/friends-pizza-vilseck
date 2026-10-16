import Image from "next/image";
import { Stamp } from "@/components/ui/Stamp";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const photos = [
  "/images/pizza-slice.jpg",
  "/images/burger.jpg",
  "/images/storefront-marktplatz-vilseck.jpg",
];

export function Gallery({ locale }: { locale: Locale }) {
  const { gallery } = getDictionary(locale);

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp>{gallery.stamp}</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-ink md:text-5xl">
            {gallery.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {gallery.items.map((item, i) => (
            <Reveal key={photos[i]} delay={i * 0.1}>
              <figure className="group overflow-hidden rounded-2xl border-2 border-ink/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photos[i]}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
