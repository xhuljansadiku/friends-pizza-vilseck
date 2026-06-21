import { Leader } from "@/components/ui/Leader";
import { Stamp } from "@/components/ui/Stamp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { business, menu } from "@/lib/content";

export function MenuBoard() {
  const allItems = menu.flatMap((category) => category.items);
  const mid = Math.ceil(allItems.length / 2);
  const columns = [allItems.slice(0, mid), allItems.slice(mid)];

  return (
    <section id="menu" className="bg-char px-6 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page)">
        <Reveal className="text-center md:text-left">
          <Stamp tone="cream">Order on the spot</Stamp>
          <h2 className="mt-6 font-display text-4xl font-extrabold text-cream md:text-5xl">
            The menu board
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-cream/70 md:mx-0">
            A taste of what comes out of the oven. Full menu, sides, and drinks
            are on the order site.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {columns.map((column, colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 0.1}>
              <div className="divide-y divide-cream/10">
                {column.map((item) => (
                  <Leader
                    key={item.name}
                    tone="cream"
                    label={item.name}
                    description={item.description}
                    value={item.price}
                    tag={item.tag}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center md:text-left">
          <Button href={business.orderUrl} external variant="primary">
            See full menu & order
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
