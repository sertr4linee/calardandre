import type { Metadata } from "next";
import { Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Calard André · Maître Tapissier · Rempaillage, Cannage & Capitonnage · Var → Monaco",
  description:
    "Atelier de tapisserie traditionnelle sur la Côte d'Azur. Rempaillage, cannage, capitonnage et réparation de chaises et fauteuils, à domicile, du Var aux Alpes-Maritimes.",
  keywords: [
    "rempaillage",
    "cannage",
    "capitonnage",
    "tapissier",
    "réparation chaise",
    "réparation fauteuil",
    "Var",
    "Alpes-Maritimes",
    "Côte d'Azur",
    "Monaco",
    "Saint-Tropez",
    "Cannes",
    "Nice",
    "artisan",
    "Calard André",
  ],
  authors: [{ name: "Calard André" }],
  openGraph: {
    title: "Calard André — Maître Tapissier",
    description:
      "Rempaillage, cannage, capitonnage et réparation de fauteuils sur la Côte d'Azur. Du Var à Monaco.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
