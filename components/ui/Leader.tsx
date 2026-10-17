type LeaderProps = {
  label: string;
  value: string;
  description?: string;
  /** Short muted text right after the label, e.g. "1 L". */
  note?: string;
  tag?: string;
  /** Small superscript after the label, e.g. allergen codes. */
  footnote?: string;
  /** Screen-reader prefix read before the footnote. */
  footnoteLabel?: string;
  tone?: "ink" | "cream";
  /** Text value (not a price): may wrap, set in the body font. */
  wrapValue?: boolean;
};

export function Leader({
  label,
  value,
  description,
  note,
  tag,
  footnote,
  footnoteLabel,
  tone = "ink",
  wrapValue = false,
}: LeaderProps) {
  const textTone = tone === "ink" ? "text-ink" : "text-cream";
  const mutedTone = tone === "ink" ? "text-ink/60" : "text-cream/60";
  const dotTone = tone === "ink" ? "border-ink/30" : "border-cream/30";

  return (
    <div className="py-3">
      <div className="flex items-baseline gap-3">
        <div className={`flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 ${wrapValue ? "shrink-0" : ""}`}>
          <span className={`font-display text-base font-semibold ${textTone}`}>
            {label}
            {footnote && (
              <>
                {/* The space lets long codes wrap below the name instead of running into the price */}
                {" "}
                <sup className={`font-mono text-[10px] font-normal ${mutedTone} [overflow-wrap:anywhere]`}>
                  {footnoteLabel && <span className="sr-only">{footnoteLabel} </span>}
                  {footnote}
                </sup>
              </>
            )}
          </span>
          {note && <span className={`font-body text-xs ${mutedTone}`}>{note}</span>}
          {tag && (
            <span className="rounded-full bg-gold px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-coal">
              {tag}
            </span>
          )}
        </div>
        <span
          className={`min-w-4 flex-1 translate-y-[-4px] border-b border-dotted ${dotTone}`}
          aria-hidden="true"
        />
        <span
          className={
            wrapValue
              ? `min-w-0 text-right font-body text-sm font-semibold sm:text-base ${textTone}`
              : `whitespace-nowrap font-mono text-sm font-bold sm:text-base ${textTone}`
          }
        >
          {value}
        </span>
      </div>
      {description && (
        <p className={`mt-0.5 font-body text-sm ${mutedTone} sm:pr-16`}>{description}</p>
      )}
    </div>
  );
}
