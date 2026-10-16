// Cookie consent, stored in localStorage. The site sets no cookies itself;
// consent only unlocks external media (the Google Maps embed).

export const consentStorageKey = "cookie-consent";
export const consentChangeEvent = "consent-change";
export const consentOpenEvent = "consent-open";

export type Consent = {
  maps: boolean;
};

export function readConsentRaw(): string | null {
  try {
    return localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

export function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<Consent>;
    return { maps: value.maps === true };
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(
      consentStorageKey,
      JSON.stringify({ ...consent, savedAt: new Date().toISOString() })
    );
  } catch {
    // Storage blocked: the choice still applies until the page reloads.
  }
  window.dispatchEvent(new Event(consentChangeEvent));
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(consentOpenEvent));
}
