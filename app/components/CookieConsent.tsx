
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  CONSENT_KEY,
  OPEN_PRIVACY_EVENT,
  saveConsent,
  type ConsentChoice,
} from "./privacy";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      setVisible(
        saved !== "accepted" && saved !== "rejected"
      );
    } catch {
      setVisible(true);
    }

    const openSettings = () => setVisible(true);

    window.addEventListener(
      OPEN_PRIVACY_EVENT,
      openSettings
    );

    return () => {
      window.removeEventListener(
        OPEN_PRIVACY_EVENT,
        openSettings
      );
    };
  }, []);

  function handleChoice(choice: ConsentChoice) {
    const previous =
      localStorage.getItem(CONSENT_KEY);

    saveConsent(choice);
    setVisible(false);

    if (
      previous === "accepted" &&
      choice === "rejected"
    ) {
      window.location.reload();
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-2xl"
    >
      <h2 className="mb-2 text-lg font-semibold">
        Sua privacidade importa
      </h2>

      <p className="mb-4 text-sm leading-relaxed">
        Utilizamos métricas do Google Analytics
        para entender como nosso site é utilizado.
        Você pode aceitar ou recusar esses cookies.
        Saiba mais em nossa{" "}
        <Link
          href="/politica-de-privacidade"
          className="underline"
        >
          Política de Privacidade
        </Link>.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="rounded-lg border border-neutral-300 px-5 py-2 text-sm"
        >
          Recusar
        </button>

        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="rounded-lg bg-neutral-900 px-5 py-2 text-sm text-white"
        >
          Aceitar métricas
        </button>
      </div>
    </div>
  );
}
