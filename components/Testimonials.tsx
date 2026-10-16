import { Star } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { TicketCard } from "@/components/ui/TicketCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { googleReviews, testimonials } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const rotations: Array<"left" | "none" | "right"> = ["left", "none", "right"];

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-gold text-gold" : "fill-transparent text-ink/20"}
        />
      ))}
    </div>
  );
}

export function Testimonials({ locale }: { locale: Locale }) {
  const { reviews } = getDictionary(locale);
  const fill = (text: string) =>
    text
      .replace("{rating}", locale === "de" ? googleReviews.rating.replace(".", ",") : googleReviews.rating)
      .replace("{count}", String(googleReviews.count));

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <Stamp>{reviews.stamp}</Stamp>
            <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:items-center">
              <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                {fill(reviews.title)}
              </h2>
              <Stars rating={Math.round(Number(googleReviews.rating))} size={22} />
            </div>
            <p className="mt-2 font-body text-ink/70">{fill(reviews.subtitle)}</p>
          </div>
          <Button href={googleReviews.url} external variant="secondary">
            {reviews.cta}
          </Button>
        </Reveal>

        {testimonials.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.author + i} delay={i * 0.1}>
                <TicketCard rotate={rotations[i % rotations.length]} className="h-full">
                  <Stars rating={item.rating} />
                  <p className="mt-3 font-body text-sm text-ink/80">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-wide text-ink/50">
                    {item.author} · Google
                  </p>
                </TicketCard>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
