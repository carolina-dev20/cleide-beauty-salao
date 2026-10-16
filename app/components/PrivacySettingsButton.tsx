
"use client";

import { openPrivacySettings } from "./privacy";

export default function PrivacySettingsButton() {
  return (
    <button
      type="button"
      onClick={openPrivacySettings}
      className="text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
    >
      Preferências de cookies
    </button>
  );
}
