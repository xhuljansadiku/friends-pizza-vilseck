type StampProps = {
  children: string;
  className?: string;
  tone?: "ink" | "cream";
};

export function Stamp({ children, className = "", tone = "ink" }: StampProps) {
  const toneClasses =
    tone === "ink"
      ? "border-ink/40 text-ink"
      : "border-cream/40 text-cream";

  return (
    <span
      className={`inline-block -rotate-3 rounded-full border-2 border-dashed px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
