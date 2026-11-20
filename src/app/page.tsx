import type { Metadata } from "next";
import HomeNav             from "@/components/home/HomeNav";
import HomeHero            from "@/components/home/HomeHero";
import ProblemSection      from "@/components/home/ProblemSection";
import PhilosophySection   from "@/components/home/PhilosophySection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ProductsSection     from "@/components/home/ProductsSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import InvitationSection   from "@/components/home/InvitationSection";
import HomeFooter          from "@/components/home/HomeFooter";
import { site }            from "@/content/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type":    "Organization",
  name:        "MINDRA Solutions",
  url:         site.url,
  logo:        `${site.url}/icon.svg`,
  email:       site.email,
  description: site.description,
  slogan:      "Making small powerful.",
};

/* Public homepage. Seven sections, one narrative, one rhythm of grounds:
   Carbon (hero) → Mineral (problem) → Sage (philosophy) → Mineral (capabilities)
   → Carbon (products) → Mineral (business architecture) → Sage (invitation).
   Legacy sections in src/components/sections remain, unused here. */
export default function Home() {
  return (
    <div className="mindra-home">
      <noscript>
        {/* Scroll reveals hide content until it is seen; without JS show it all, and let the header scroll away instead of sitting fixed over light sections. */}
        <style>{`[data-reveal].rv,[data-reveal] .rv{opacity:1!important;transform:none!important}[data-reveal] .rv-line{transform:none!important}[data-reveal] .rv-line-y{transform:none!important}.mindra-nav{position:absolute!important}`}</style>
      </noscript>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="mindra fixed left-4 top-4 z-[200] -translate-y-24 rounded-[2px] bg-mineral px-5 py-3 font-text text-[0.9375rem] font-semibold text-carbon focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        Skip to content
      </a>
      <HomeNav />
      <main id="main">
        <HomeHero />
        <ProblemSection />
        <PhilosophySection />
        <CapabilitiesSection />
        <ProductsSection />
        <ArchitectureSection />
        <InvitationSection />
      </main>
      <HomeFooter />
    </div>
  );
}
