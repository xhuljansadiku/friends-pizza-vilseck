import type { SVGProps } from "react";

export function HeroPizza(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 480" fill="none" {...props}>
      <circle cx="240" cy="240" r="220" fill="#FAB800" opacity="0.12" />
      <circle cx="240" cy="240" r="180" fill="#FBF7EE" stroke="#0A0A0A" strokeWidth="6" />
      <circle cx="240" cy="240" r="148" fill="#FAB800" stroke="#0A0A0A" strokeWidth="5" />

      <g stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round">
        <line x1="240" y1="240" x2="240" y2="92" />
        <line x1="240" y1="240" x2="368" y2="166" />
        <line x1="240" y1="240" x2="368" y2="314" />
        <line x1="240" y1="240" x2="240" y2="388" />
        <line x1="240" y1="240" x2="112" y2="314" />
        <line x1="240" y1="240" x2="112" y2="166" />
      </g>

      <g fill="#0A0A0A">
        <circle cx="240" cy="150" r="13" />
        <circle cx="318" cy="195" r="13" />
        <circle cx="318" cy="285" r="13" />
        <circle cx="240" cy="330" r="13" />
        <circle cx="162" cy="285" r="13" />
        <circle cx="162" cy="195" r="13" />
        <circle cx="240" cy="240" r="14" />
      </g>

      <g fill="#FBF7EE" opacity="0.9">
        <circle cx="200" cy="180" r="6" />
        <circle cx="280" cy="200" r="5" />
        <circle cx="300" cy="270" r="6" />
        <circle cx="210" cy="300" r="5" />
        <circle cx="170" cy="240" r="5" />
      </g>

      <circle cx="240" cy="240" r="180" fill="none" stroke="#0A0A0A" strokeWidth="6" />
    </svg>
  );
}
