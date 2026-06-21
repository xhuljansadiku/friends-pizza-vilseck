import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-wide transition-[transform,background-color,color,box-shadow] duration-200 ease-out active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-deep hover:scale-[1.03] shadow-[0_4px_0_0_rgba(10,10,10,1)] hover:shadow-[0_2px_0_0_rgba(10,10,10,1)] hover:translate-y-[2px]",
  secondary:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream hover:scale-[1.03]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
