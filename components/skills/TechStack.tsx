import { skillGroups } from "@/data/skills";
import { Marquee } from "@/components/ui/Marquee";
import { TechPill } from "./TechPill";
export function TechStack() {
  return (
    <section className="section tech-stack">
      <div className="eyebrow">06 / TOOLKIT</div>
      <h2>
        WHAT  I  BUILD
        <br />
        <em>WITH.</em>
      </h2>
      <Marquee items={skillGroups.flatMap((g) => g.items)} />
      <div className="stack-groups">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <span>{group.label}</span>
            <p>
              {group.items.map((item) => (
                <TechPill key={item}>{item}</TechPill>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
