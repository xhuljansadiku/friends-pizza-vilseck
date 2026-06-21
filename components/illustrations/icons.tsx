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
      <ellipse cx="24" cy="30" rx="18" ry="9" />
      <path d="M10 28c2-6 6-14 6-18M18 30c2-7 7-17 7-21M27 30c2-7 7-17 7-21M35 28c-1-5-4-12-5-16" />
      <circle cx="18" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="27" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SaladIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 26a18 12 0 0 1 36 0Z" />
      <path d="M6 26h36" />
      <path d="M16 26c0-6 2-12 4-16M24 26c0-7 0-13 0-18M32 26c0-6-2-12-4-16" />
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
