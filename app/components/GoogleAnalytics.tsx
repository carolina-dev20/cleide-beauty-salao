
"use client";

import { useEffect } from "react";

import {
  CONSENT_EVENT,
  CONSENT_KEY,
} from "./privacy";

const MEASUREMENT_ID = "G-X20G5KZMZE";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsStarted = false;

function startAnalytics() {
  if (analyticsStarted) return;

  analyticsStarted = true;

  window.dataLayer = window.dataLayer || [];

  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());

  window.gtag("config", MEASUREMENT_ID, {
    anonymize_ip: true,
  });

  const script = document.createElement("script");

  script.id = "cleide-google-analytics";
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    function updateAnalytics() {
      let consent: string | null = null;

      try {
        consent = localStorage.getItem(CONSENT_KEY);
      } catch {
        return;
      }

      if (consent === "accepted") {
        startAnalytics();
      } else if (analyticsStarted) {
        window.location.reload();
      }
    }

    updateAnalytics();

    window.addEventListener(
      CONSENT_EVENT,
      updateAnalytics
    );

    return () => {
      window.removeEventListener(
        CONSENT_EVENT,
        updateAnalytics
      );
    };
  }, []);

  return null;
}
