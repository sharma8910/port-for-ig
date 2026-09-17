import { MagneticButton } from "@/components/ui/MagneticButton";
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-spark">✦</div>
      <div className="eyebrow">08 / SAY HELLO</div>
      <h2>
        LET&apos;S BUILD
        <br />
        <em>SOMETHING.</em>
      </h2>
      <p>Have a project, idea or collaboration in mind?</p>
      <div className="contact-actions">
        <MagneticButton href="https://github.com/sharma8910" dark>
          GITHUB
        </MagneticButton>
        <MagneticButton href="https://linkedin.com/in/sonu-sharma-955740371" dark>
          LINKEDIN
        </MagneticButton>
        <MagneticButton href="https://instagram.com/sonu.cs_2004" dark>
          INSTAGRAM
        </MagneticButton>
        <MagneticButton href="mailto:stanyoourt@gmail.com" dark>
          EMAIL
        </MagneticButton>
      </div>
      <div className="signature">
        SONU SHARMA <span>BACKEND × AI</span>
      </div>
    </section>
  );
}
