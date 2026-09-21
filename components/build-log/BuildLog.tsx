import { buildLog } from "@/data/build-log";
import { journeySummary } from "@/data/journey";
import { BuildLogItem } from "./BuildLogItem";
export function BuildLog() {
  return (
    <section className="section build-log" id="building">
      <div className="build-heading">
        <div className="eyebrow">02 / REAL TIME</div>
        <h2>
          BUILDING
          <br />
          IN <em>PUBLIC.</em>
        </h2>
        <p>
          Notes from the journey — the experiments, late-night debugging, and
          systems taking shape.
        </p>
      </div>
      <div className="journey">
        {journeySummary.map((entry, i) => (
          <div className="journey-step" key={entry.day}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{entry.day}</strong>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
      <div className="log-list">
        {buildLog.map((item, i) => (
          <BuildLogItem key={item.text} index={i} {...item} />
        ))}
      </div>
    </section>
  );
}
