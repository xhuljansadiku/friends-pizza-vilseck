import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 2.4,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PizzaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6 4 40h40L24 6Z" />
      <circle cx="24" cy="22" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="30" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="31" cy="30" r="2.4" fill="currentColor" stroke="none" />
      <path d="M14 34h20" />
    </svg>
  );
}

export function BurgerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 20c0-7 7.2-12 16-12s16 5 16 12" />
      <path d="M6 22h36" />
      <path d="M8 28h32" />
      <path d="M6 34h36" />
      <path d="M9 34c0 3.5 6.7 6 15 6s15-2.5 15-6" />
    </svg>
  );
}

export function PastaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="24" cy="37" rx="19" ry="5" />
      <path d="M12 35c0-6 5.4-10 12-10s12 4 12 10" />
      <path d="M17 34c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M24 28V6" />
      <path d="M19.5 6v6a4.5 4.5 0 0 0 9 0V6" />
    </svg>
  );
}

export function SaladIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 24h38c0 9.4-8.5 17-19 17S5 33.4 5 24Z" />
      <path d="M13 24c-1.5-6.5 1.5-11.5 8-13 1.5 6-1.5 11-8 13Z" />
      <path d="M24 24c0-7.5 5-12.5 13-13 0 7.5-5 12-13 13Z" />
      <circle cx="28" cy="7" r="2.4" fill="currentColor" stroke="none" />
      <path d="M19 41.5h10" />
    </svg>
  );
}

export function DessertIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22c0-7 5.4-12 12-12s12 5 12 12" />
      <path d="M10 22h28" />
      <path d="M13 22l11 22 11-22" />
      <path d="M17 29h14M20.5 36h7" />
      <circle cx="24" cy="6" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DrinkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8h20l-3 30a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3L14 8Z" />
      <path d="M12 8h24" />
      <path d="M16 18h16" />
    </svg>
  );
}
