import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Testimonials } from "@/components/Testimonials";
import { MenuBoard } from "@/components/MenuBoard";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { LocationHours } from "@/components/LocationHours";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <MenuBoard />
      <Categories />
      <About />
      <LocationHours />
      <Contact />
    </>
  );
}
