import { Stamp } from "@/components/ui/Stamp";
import { Reveal } from "@/components/Reveal";
import { OvenFlame } from "@/components/illustrations/OvenFlame";

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-(--container-page) items-center gap-12 md:grid-cols-2">
        <Reveal>
          <OvenFlame className="mx-auto w-full max-w-sm" />
        </Reveal>

        <Reveal delay={0.1} className="text-center md:text-left">
          <Stamp>Our story</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Good pizza starts with good friends.
          </h2>
          <p className="mt-5 font-body text-lg text-ink/70">
            Friends Pizza started with people who actually like cooking for
            people. We proof our dough every morning, keep the topping list
            honest, and run the kitchen the way we&apos;d want to eat: fast,
            fresh, and without pretense.
          </p>
          <p className="mt-4 font-body text-lg text-ink/70">
            Find us right on the Marktplatz in Vilseck. Call ahead, or order
            online for delivery and pickup.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
