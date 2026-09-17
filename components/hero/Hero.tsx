"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HeroBadge } from "./HeroBadge";
import { FloatingTech ,FloatingTechs} from "./FloatingTech";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".hero-intro", { opacity: 0, y: 25, duration: 0.6 })
        .from(
          ".hero-line",
          { opacity: 0, yPercent: 105, stagger: 0.12, duration: 0.85 },
          "-=.25",
        )
        .from(
          ".hero-copy, .hero-actions",
          { opacity: 0, y: 18, stagger: 0.1, duration: 0.5 },
          "-=.35",
        );
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="hero" id="top">
      <div className="hero-portrait" aria-hidden="true">
        <Image
          src="/images/profile/sonu-hero.jpeg"
          alt=""
          fill
          priority
          sizes="(max-width: 760px) 92vw, 55vw"
        />
      </div>
      <div className="hero-content">
        <div className="hero-floating-links">
          <FloatingTech />
          <FloatingTechs />
        </div>
        <div className="hero-intro">
          <HeroBadge />
        </div>
        <h1 className="hero-title">
          <span className="hero-line">I BUILD</span>
          <span className="hero-line">SYSTEMS THAT</span>
          <span className="hero-line orange">ACTUALLY WORK.</span>
        </h1>
        <p className="hero-copy">
          Backend developer building scalable web systems, AI-powered
          applications and realtime experiences.
        </p>
        <div className="hero-actions">
          <MagneticButton href="#work">VIEW MY WORK</MagneticButton>
          <MagneticButton href="#contact" dark={false}>
            GET IN TOUCH
          </MagneticButton>
        </div>
      </div>
      <div className="scroll-note hero-copy">
        SCROLL TO EXPLORE <b>↓</b>
      </div>
    </section>
  );
}
