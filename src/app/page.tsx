import Hero from "@/components/sections/Hero";
import TrainingPrograms from "@/components/sections/TrainingPrograms";
import Coaches from "@/components/sections/Coaches";
import Club from "@/components/sections/Club";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrainingPrograms />
      <Coaches />
      <Club />
      <Pricing />
      <Contact />
      <Testimonials />
    </>
  );
}
