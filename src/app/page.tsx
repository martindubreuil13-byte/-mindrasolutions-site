import HomeNav    from "@/components/home/HomeNav";
import HomeHero   from "@/components/home/HomeHero";
import HomeFooter from "@/components/home/HomeFooter";

/* Public homepage (brand redesign). Legacy sections (VisionSection,
   WorkforceSection, AxiaProofSection, FutureSection, BuildersSection,
   ManifestoSection, Footer, Nav, Hero) remain in src/components, unused here. */
export default function Home() {
  return (
    <div className="mindra-home">
      <HomeNav />
      <main>
        <HomeHero />
      </main>
      <HomeFooter />
    </div>
  );
}
