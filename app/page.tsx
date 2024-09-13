import About from "@/components/sections/About";
import Intro from "@/components/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 scroll-mt-[100rem]">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
