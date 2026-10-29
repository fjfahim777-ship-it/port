import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
