import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "සුභාෂිත — Sinhala Dictionary",
  description: "A Sinhala ↔ English dictionary",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="si">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
