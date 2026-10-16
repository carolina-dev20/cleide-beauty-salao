
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cleidebeautysalao.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cleide Beauty Salão | Salão de Beleza em Guarulhos",
    template: "%s | Cleide Beauty Salão",
  },

  description:
    "Cleide Beauty Salão no Jardim São João, Guarulhos. Cabelos, penteados, design de sobrancelhas e tratamentos capilares com atendimento personalizado.",

  keywords: [
    "salão de beleza em Guarulhos",
    "salão de beleza Guarulhos",
    "salão de beleza Jardim São João",
    "salão Jardim São João Guarulhos",
    "cabeleireiro em Guarulhos",
    "cabeleireiro Jardim São João",
    "tratamento capilar Guarulhos",
    "penteados Guarulhos",
    "design de sobrancelhas Guarulhos",
    "Cleide Beauty Salão",
  ],

  authors: [{ name: "Cleide Beauty Salão" }],
  creator: "Cleide Beauty Salão",
  publisher: "Cleide Beauty Salão",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Cleide Beauty Salão",
    title: "Cleide Beauty Salão | Salão de Beleza em Guarulhos",
    description:
      "Cabelos, penteados, design de sobrancelhas e tratamentos capilares no Jardim São João, Guarulhos.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cleide Beauty Salão | Salão de Beleza em Guarulhos",
    description:
      "Beleza, cuidado e atendimento personalizado no Jardim São João, Guarulhos.",
  },

  category: "beauty",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#business`,

  name: "Cleide Beauty Salão",
  url: `${siteUrl}/`,

  description:
    "Salão de beleza no Jardim São João, em Guarulhos, especializado em cuidados capilares, cortes, escovas, coloração, penteados e design de sobrancelhas.",

  telephone: "+5511937367090",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Caiçara, 257",
    addressLocality: "Guarulhos",
    addressRegion: "SP",
    postalCode: "07151-040",
    addressCountry: "BR",
  },

  areaServed: {
    "@type": "City",
    name: "Guarulhos",
  },

  hasMap: "https://maps.app.goo.gl/7xAtNkbc5DRCaQs3A",

  sameAs: [
    "https://www.instagram.com/cleidebeautysalao/",
    "https://maps.app.goo.gl/7xAtNkbc5DRCaQs3A",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5511937367090",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },

  knowsAbout: [
    "Corte de cabelo feminino",
    "Escova",
    "Penteados",
    "Design de sobrancelhas",
    "Tratamentos capilares",
    "Coloração capilar",
    "Mechas",
    "Hidratação capilar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GoogleAnalytics />

        {children}

        <CookieConsent />
      </body>
    </html>
  );
}
