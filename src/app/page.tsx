// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonial />
      <PopularClients />
    </>
  );
}
