import { TicketCard } from "@/components/ui/TicketCard";
import { Reveal } from "@/components/Reveal";
import { highlights } from "@/lib/content";

const rotations: Array<"left" | "none" | "right"> = ["left", "none", "right"];

export function Highlights() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-(--container-page) gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <TicketCard rotate={rotations[i]} className="h-full text-center md:text-left">
              <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{item.description}</p>
            </TicketCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
