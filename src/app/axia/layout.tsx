import type { Metadata } from "next";

export const metadata: Metadata = {
  title:       "ALPA by MINDRA — Autonomous Lead Engine",
  description: "ALPA finds enriched business leads in seconds — website, email, phone number. The first live operational agent inside the MINDRA ecosystem.",
  openGraph: {
    title:       "ALPA by MINDRA — Autonomous Lead Engine",
    description: "ALPA finds enriched business leads in seconds — website, email, phone number. The first live operational agent inside the MINDRA ecosystem.",
  },
};

export default function AxiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
