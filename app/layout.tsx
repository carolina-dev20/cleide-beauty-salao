import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        {children}
      </body>
    </html>
  );
}