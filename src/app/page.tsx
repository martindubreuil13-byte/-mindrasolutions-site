import Nav              from "@/components/Nav";
import Hero             from "@/components/sections/Hero";
import VisionSection    from "@/components/sections/VisionSection";
import WorkforceSection from "@/components/sections/WorkforceSection";
import AxiaProofSection from "@/components/sections/AxiaProofSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import Footer           from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VisionSection />
        <WorkforceSection />
        <AxiaProofSection />
        <ManifestoSection />
      </main>
      <Footer />
    </>
  );
}
