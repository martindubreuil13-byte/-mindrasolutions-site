import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* MINDRA brand type (Playbook V1.0): Sora 400–500 display, Manrope 400–600 text.
   Self-hosted latin subsets (OFL 1.1), so no third-party font request is needed. */
const sora = localFont({
  variable: "--font-sora",
  display:  "swap",
  src: [
    { path: "../fonts/sora-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/sora-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  display:  "swap",
  src: [
    { path: "../fonts/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/manrope-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const TITLE       = "MINDRA — Intelligence changes the equation";
const DESCRIPTION = "We bring human experience, organizational knowledge, and artificial intelligence together to expand what independent businesses can accomplish.";
const OG_IMAGE    = { url: "/og/mindra-home.png", width: 1200, height: 630, alt: "MINDRA" };

export const metadata: Metadata = {
  title: {
    default:  TITLE,
    template: "%s | MINDRA",
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://mindrasolutions.com"),
  openGraph: {
    type:        "website",
    siteName:    "MINDRA",
    title:       TITLE,
    description: DESCRIPTION,
    url:         "https://mindrasolutions.com",
    images:      [OG_IMAGE],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TITLE,
    description: DESCRIPTION,
    images:      [OG_IMAGE.url],
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
