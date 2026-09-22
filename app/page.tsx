import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { BuildLog } from "@/components/build-log/BuildLog";
import { Projects } from "@/components/projects/Projects";
import { ResourceVault } from "@/components/resources/ResourceVault";
import { Journey } from "@/components/journey/Journey";
import { TechStack } from "@/components/skills/TechStack";
import { TerminalMode } from "@/components/terminal/TerminalMode";
import { InstagramSection } from "@/components/instagram/InstagramSection";
import { Contact } from "@/components/contact/Contact";
import { Cursor } from "@/components/ui/Cursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Cursor />
      <div className="atmosphere">
        <i />
        <i />
        <i />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ResourceVault />
      <Journey />
      <TechStack />
      <TerminalMode />
      <InstagramSection />
      <Contact />
      <footer>
        <strong>SONU SHARMA</strong>
        <span>Backend / AI Engineer · Kolkata, India</span>
        <small>© {new Date().getFullYear()} · built in public (@sonu.cs_2004)</small>
      </footer>
    </main>
  );
}
