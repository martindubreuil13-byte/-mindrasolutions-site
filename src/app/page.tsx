import Nav             from "@/components/Nav";
import Hero            from "@/components/sections/Hero";
import SmeRealitySection from "@/components/sections/VisionSection";
import EcosystemSection from "@/components/sections/WorkforceSection";
import AlpaSection      from "@/components/sections/AxiaProofSection";
import FutureSection    from "@/components/sections/FutureSection";
import BuildersSection  from "@/components/sections/BuildersSection";
import FinalCTASection  from "@/components/sections/ManifestoSection";
import Footer           from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SmeRealitySection />
        <EcosystemSection />
        <AlpaSection />
        <FutureSection />
        <BuildersSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
