import Hero from "@/compenents/sections/Hero";
import TrainingPrograms from "@/compenents/sections/TrainingPrograms";
import Coaches from "@/compenents/sections/Coaches";
import Club from "@/compenents/sections/Club";
import Testimonials from "@/compenents/sections/Testimonials";
import Pricing from "@/compenents/sections/Pricing";
import Contact from "@/compenents/sections/Contact";

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
