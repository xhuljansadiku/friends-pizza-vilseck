import { Star } from "lucide-react";
import { Stamp } from "@/components/ui/Stamp";
import { TicketCard } from "@/components/ui/TicketCard";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";

const rotations: Array<"left" | "none" | "right"> = ["left", "none", "right"];

export function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp>What people say</Stamp>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.author + i} delay={i * 0.1}>
              <TicketCard rotate={rotations[i % rotations.length]} className="h-full">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={
                        starIndex < item.rating
                          ? "fill-gold text-gold"
                          : "fill-transparent text-ink/20"
                      }
                    />
                  ))}
                </div>
                <p className="mt-3 font-body text-sm text-ink/80">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-ink/50">
                  {item.author}
                </p>
              </TicketCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
