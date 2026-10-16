type LeaderProps = {
  label: string;
  value: string;
  description?: string;
  tag?: string;
  tone?: "ink" | "cream";
  /** Let a long text value wrap instead of forcing the row wider. */
  wrapValue?: boolean;
};

export function Leader({
  label,
  value,
  description,
  tag,
  tone = "ink",
  wrapValue = false,
}: LeaderProps) {
  const textTone = tone === "ink" ? "text-ink" : "text-cream";
  const mutedTone = tone === "ink" ? "text-ink/60" : "text-cream/60";
  const dotTone = tone === "ink" ? "border-ink/30" : "border-cream/30";

  return (
    <div className="flex items-baseline gap-3 py-3">
      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className={`font-display text-base font-semibold ${textTone}`}>
            {label}
          </span>
          {tag && (
            <span className="rounded-full bg-gold px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-coal">
              {tag}
            </span>
          )}
        </div>
        {description && (
          <span className={`font-body text-sm ${mutedTone}`}>{description}</span>
        )}
      </div>
      <span className={`flex-1 border-b border-dotted ${dotTone} translate-y-[-4px]`} aria-hidden="true" />
      <span
        className={`font-mono text-base font-bold ${
          wrapValue ? "min-w-0 text-right" : "whitespace-nowrap"
        } ${textTone}`}
      >
        {value}
      </span>
    </div>
  );
}
