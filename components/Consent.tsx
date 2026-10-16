"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie, ExternalLink, MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import {
  consentChangeEvent,
  consentOpenEvent,
  consentStorageKey,
  openConsentSettings,
  parseConsent,
  readConsentRaw,
  saveConsent,
} from "@/lib/consent";

type CookieLabels = Dictionary["cookies"];

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === consentStorageKey) onChange();
  };
  window.addEventListener(consentChangeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(consentChangeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * `ready` is false during server render and hydration, so nothing that
 * depends on the stored choice (banner, map) renders until the client knows it.
 */
function useConsent() {
  const raw = useSyncExternalStore(subscribe, readConsentRaw, () => undefined);
  return { ready: raw !== undefined, consent: parseConsent(raw ?? null) };
}

function Switch({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
        checked ? "bg-gold" : "bg-cream/25"
      }`}
    >
      <span
        className={`absolute left-0 top-0.5 h-5 w-5 rounded-full bg-paper shadow transition-transform ${
          checked ? "translate-x-5.5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

type CookieBannerProps = {
  labels: CookieLabels;
  privacyHref: string;
};

export function CookieBanner({ labels, privacyHref }: CookieBannerProps) {
  const { ready, consent } = useConsent();
  const [reopened, setReopened] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [maps, setMaps] = useState(false);

  useEffect(() => {
    function onOpen() {
      setMaps(parseConsent(readConsentRaw())?.maps ?? false);
      setShowSettings(true);
      setReopened(true);
    }
    window.addEventListener(consentOpenEvent, onOpen);
    return () => window.removeEventListener(consentOpenEvent, onOpen);
  }, []);

  if (!ready || (consent && !reopened)) return null;

  function choose(value: { maps: boolean }) {
    saveConsent(value);
    setReopened(false);
    setShowSettings(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="surface-dark fixed inset-x-3 bottom-24 z-50 rounded-2xl border border-cream/15 bg-char p-5 text-cream shadow-2xl md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
    >
      <div className="flex items-center gap-2">
        <Cookie size={20} className="text-gold" aria-hidden="true" />
        <h2 id="cookie-title" className="font-display text-lg font-bold">
          {labels.title}
        </h2>
      </div>
      <p className="mt-2 font-body text-sm text-cream/75">
        {labels.text}{" "}
        <Link href={privacyHref} className="underline hover:text-gold">
          {labels.privacyLink}
        </Link>
      </p>

      {showSettings && (
        <div className="mt-4 space-y-3 border-t border-cream/10 pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-sm font-bold">{labels.necessaryTitle}</p>
              <p className="font-body text-xs text-cream/60">{labels.necessaryText}</p>
            </div>
            <Switch checked disabled label={`${labels.necessaryTitle}: ${labels.alwaysOn}`} />
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-sm font-bold">{labels.mapsTitle}</p>
              <p className="font-body text-xs text-cream/60">{labels.mapsText}</p>
            </div>
            <Switch checked={maps} onChange={setMaps} label={labels.mapsTitle} />
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose({ maps: false })}
          className="min-h-11 rounded-full border-2 border-cream/40 px-4 font-display text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          {labels.necessaryOnly}
        </button>
        <button
          type="button"
          onClick={() => choose({ maps: true })}
          className="min-h-11 rounded-full bg-gold px-4 font-display text-sm font-semibold text-coal transition-colors hover:bg-gold-deep"
        >
          {labels.acceptAll}
        </button>
      </div>
      <button
        type="button"
        onClick={() => (showSettings ? choose({ maps }) : setShowSettings(true))}
        className="mt-2 w-full min-h-10 font-mono text-xs font-bold uppercase tracking-wider text-cream/70 underline-offset-4 hover:text-gold hover:underline"
      >
        {showSettings ? labels.save : labels.settings}
      </button>
    </div>
  );
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className="uppercase hover:text-gold">
      {label}
    </button>
  );
}

type MapEmbedProps = {
  src: string;
  title: string;
  mapsUrl: string;
  labels: CookieLabels;
};

/** Google Maps iframe that only loads after consent. */
export function MapEmbed({ src, title, mapsUrl, labels }: MapEmbedProps) {
  const { consent } = useConsent();

  if (consent?.maps) {
    return (
      <iframe
        src={src}
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="block h-[420px] w-full"
      />
    );
  }

  return (
    <div className="flex h-[420px] flex-col items-center justify-center gap-4 bg-char-light px-6 text-center">
      <MapPin size={36} className="text-gold" aria-hidden="true" />
      <p className="max-w-xs font-body text-sm text-cream/75">{labels.mapPlaceholder}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => saveConsent({ ...(consent ?? {}), maps: true })}
          className="min-h-11 rounded-full bg-gold px-5 font-display text-sm font-semibold text-coal transition-colors hover:bg-gold-deep"
        >
          {labels.loadMap}
        </button>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-cream/40 px-5 font-display text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          {labels.openInMaps}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
