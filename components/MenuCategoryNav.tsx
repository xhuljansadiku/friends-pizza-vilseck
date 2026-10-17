"use client";

import { useEffect, useRef, useState } from "react";

type MenuCategoryNavProps = {
  /** `id` is the anchor without "#", e.g. "menu-pizza". */
  items: { id: string; label: string }[];
  label: string;
};

/** Sticky row of category chips under the header; highlights the section in view. */
export function MenuCategoryNav({ items, label }: MenuCategoryNavProps) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function update() {
      // Desktop shows the menu in two columns, so scroll position can't tell which
      // category is being read; there the clicked chip stays highlighted instead.
      if (window.matchMedia("(min-width: 768px)").matches) return;
      // A section counts as current once its top passes just below the header + this bar.
      const offset = (listRef.current?.getBoundingClientRect().bottom ?? 0) + 24;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  // Keep the active chip visible in the horizontal row without moving the page.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !chip) return;
    const left = chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label={label}
      className="sticky z-30 -mx-6 mt-10 border-b border-cream/10 bg-char/95 px-6 py-3 backdrop-blur-md md:mx-0 md:rounded-full md:border md:px-3"
      style={{ top: "var(--header-h, 72px)" }}
    >
      <ul
        ref={listRef}
        className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                data-id={item.id}
                onClick={() => setActive(item.id)}
                aria-current={isActive ? "true" : undefined}
                className={`flex min-h-9 items-center rounded-full px-3.5 font-display text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-gold text-coal"
                    : "border border-cream/15 text-cream/80 hover:border-gold hover:text-gold"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
