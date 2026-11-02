import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "සුභාෂිත — Sinhala Dictionary",
  description: "A free Sinhala ↔ English dictionary for learners, students, and writers.",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1, interactive-widget=resizes-content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=Noto+Serif:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
