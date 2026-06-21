import type { SVGProps } from "react";

export function OvenFlame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" fill="none" {...props}>
      <rect x="60" y="160" width="280" height="180" rx="24" fill="#211C19" stroke="#FAB800" strokeWidth="4" />
      <path d="M60 184a160 60 0 0 1 280 0" fill="#211C19" stroke="#FAB800" strokeWidth="4" />
      <ellipse cx="200" cy="184" rx="100" ry="40" fill="#161311" />

      <path
        d="M200 130c14 22-8 30-8 48 0 13 9 22 20 22 13 0 23-11 23-26 0-8-3-15-7-21 10 4 18 16 18 31 0 24-19 42-43 42-22 0-40-17-40-40 0-30 27-38 37-56Z"
        fill="#FAB800"
      />
      <path
        d="M194 158c6 10-4 14-4 23 0 6 4 10 9 10 6 0 10-5 10-12 0-3-1-7-3-9 4 2 8 7 8 14 0 11-9 19-19 19-10 0-18-8-18-18 0-14 12-17 17-27Z"
        fill="#FBF7EE"
      />

      <rect x="92" y="340" width="216" height="14" rx="7" fill="#0A0A0A" />
      <rect x="76" y="354" width="248" height="10" rx="5" fill="#0A0A0A" opacity="0.6" />
    </svg>
  );
}
