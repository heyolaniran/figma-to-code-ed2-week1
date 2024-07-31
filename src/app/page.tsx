import Collections from "@/components/Collections";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="z-5">
      <Hero />
      <Collections />
      <Services />
      <CTA/>
    </div>
  );
}
