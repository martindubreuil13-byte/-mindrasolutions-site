import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default:  "MINDRA — AI Ecosystem for SMEs",
    template: "%s | MINDRA",
  },
  description:
    "Contextual intelligence, operational AI agents, and human expertise — converging into one ecosystem built for the businesses the system was never designed for.",
  metadataBase: new URL("https://mindrasolutions.com"),
  openGraph: {
    type:        "website",
    siteName:    "MINDRA",
    title:       "MINDRA — AI Ecosystem for SMEs",
    description: "Contextual intelligence, operational AI agents, and human expertise — converging into one ecosystem built for SMEs.",
    url:         "https://mindrasolutions.com",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "MINDRA — AI Ecosystem for SMEs",
    description: "Contextual intelligence, operational AI agents, and human expertise — converging into one ecosystem built for SMEs.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
