"use client";

import { useSyncExternalStore } from "react";
import { openingHours } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries";

const weekOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const restDayIndex = weekOrder.indexOf(openingHours.closedDay);

type Status = "open" | "before" | "afterTomorrow" | "afterFriday" | "restDay";

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

const berlinClock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Berlin",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** "status:dayIndex" for the current time in Vilseck (Europe/Berlin). */
function readSnapshot() {
  const parts = berlinClock.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = weekOrder.indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  let status: Status;
  if (day === restDayIndex) status = "restDay";
  else if (minutes < toMinutes(openingHours.opens)) status = "before";
  else if (minutes < toMinutes(openingHours.closes)) status = "open";
  else status = (day + 1) % 7 === restDayIndex ? "afterFriday" : "afterTomorrow";

  return `${status}:${day}`;
}

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(timer);
}

/** Null during server render and hydration; the live value right after. */
function useOpeningState() {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, () => null);
  if (!snapshot) return null;
  const [status, day] = snapshot.split(":");
  return { status: status as Status, day: Number(day) };
}

const dotColor: Record<Status, string> = {
  open: "bg-emerald-500",
  before: "bg-gold",
  afterTomorrow: "bg-current opacity-40",
  afterFriday: "bg-current opacity-40",
  restDay: "bg-gold",
};

type OpeningStatusProps = {
  labels: Dictionary["status"];
  /** Shown until the client knows the local time. */
  fallback: string;
  className?: string;
};

export function OpeningStatus({ labels, fallback, className = "" }: OpeningStatusProps) {
  const state = useOpeningState();
  const text = state
    ? labels[state.status]
        .replace("{open}", openingHours.opens)
        .replace("{close}", openingHours.closes)
    : fallback;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-live="polite">
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        {state?.status === "open" && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            state ? dotColor[state.status] : "bg-current opacity-40"
          }`}
        />
      </span>
      {text}
    </span>
  );
}

type WeekHoursProps = {
  labels: Pick<Dictionary["location"], "weekdays" | "today" | "restDay">;
};

export function WeekHours({ labels }: WeekHoursProps) {
  const state = useOpeningState();
  const hoursShort = `${openingHours.opens.slice(0, 2)}-${openingHours.closes.slice(0, 2)}`;

  return (
    <ol className="grid grid-cols-7 gap-1.5 sm:gap-2">
      {labels.weekdays.map((dayLabel, i) => {
        const closed = i === restDayIndex;
        const today = state?.day === i;
        return (
          <li
            key={dayLabel}
            aria-current={today ? "date" : undefined}
            className={`relative flex min-w-0 flex-col items-center gap-1 rounded-xl border-2 px-0.5 pb-2.5 pt-3 text-center transition-colors ${
              closed
                ? "border-dashed border-cream/25 text-cream/45"
                : today
                  ? "border-gold bg-gold text-coal"
                  : "border-cream/15 text-cream"
            }`}
          >
            {today && (
              <span
                className={`absolute -top-2.5 rounded-full px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase leading-none tracking-wider ${
                  closed ? "bg-cream text-coal" : "bg-coal text-gold"
                }`}
              >
                {labels.today}
              </span>
            )}
            <span className="font-display text-sm font-bold">{dayLabel}</span>
            <span
              className={`font-mono font-bold uppercase leading-tight ${
                closed ? "text-[8px] tracking-tighter text-gold/80 sm:text-[10px]" : "text-[10px] sm:text-xs"
              }`}
            >
              {closed ? labels.restDay : hoursShort}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
