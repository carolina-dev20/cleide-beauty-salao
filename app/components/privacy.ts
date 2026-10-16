export const CONSENT_KEY = "cleide-analytics-consent-v1";

export const CONSENT_EVENT = "cleide-consent-changed";

export const OPEN_PRIVACY_EVENT = "cleide-open-privacy";

export type ConsentChoice = "accepted" | "rejected";

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Continua funcionando sem armazenamento.
  }

  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openPrivacySettings() {
  window.dispatchEvent(new Event(OPEN_PRIVACY_EVENT));
}
