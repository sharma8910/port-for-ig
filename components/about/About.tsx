import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "./Stats";
export function About() {
  return (
    <section className="section about" id="about">
      <Reveal>
        <div className="eyebrow">01 / ABOUT.TXT</div>
        
          <h2 className = "hero-title">WHO IS
          <em> SONU?</em>
          </h2>
      </Reveal>
      <div className="about-copy">
        <Reveal>
          <p>
            I&apos;m Sonu — A CSE student building backend systems, AI-powered
        applications, and realtime infrastructure.
          </p>
          <p className="muted">
             I care about how things work under the hood — and I learn
        fastest by turning that curiosity into working software.
          </p>
          <p className="muted">
  I also document the process on Instagram — the wins, the bugs,
  and everything in between — for other CS students figuring
  this out alongside me.
</p>
        </Reveal>
      </div>
      <Stats />
    </section>
  );
}
