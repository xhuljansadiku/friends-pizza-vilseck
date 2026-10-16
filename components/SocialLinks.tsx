import type { SVGProps } from "react";
import { business } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const networks = [
  { key: "instagram", name: "Instagram", Icon: InstagramIcon, href: business.social.instagram },
  { key: "facebook", name: "Facebook", Icon: FacebookIcon, href: business.social.facebook },
] as const;

type SocialLinksProps = {
  /** e.g. "Follow us on {network}" */
  labelTemplate: string;
  className?: string;
};

/** Round icon buttons linking to the social profiles. */
export function SocialLinks({ labelTemplate, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {networks.map(({ key, name, Icon, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labelTemplate.replace("{network}", name)}
            title={name}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink/15 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-coal"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
