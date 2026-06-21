import type { ReactNode } from "react";

type TicketCardProps = {
  children: ReactNode;
  className?: string;
  rotate?: "left" | "right" | "none";
  tone?: "cream" | "char";
};

const rotations: Record<NonNullable<TicketCardProps["rotate"]>, string> = {
  left: "-rotate-1",
  right: "rotate-1",
  none: "",
};

export function TicketCard({
  children,
  className = "",
  rotate = "none",
  tone = "cream",
}: TicketCardProps) {
  const toneClasses =
    tone === "cream"
      ? "bg-cream border-ink/30 text-ink"
      : "bg-char-light border-cream/20 text-cream";

  return (
    <div
      className={`rounded-2xl border-2 border-dashed p-6 transition-transform duration-300 ease-out hover:-translate-y-1 ${toneClasses} ${rotations[rotate]} ${className}`}
    >
      {children}
    </div>
  );
}
