import CTA from "@/components/sections/CTA";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <Faq />
      <CTA />
    </>
  );
}
