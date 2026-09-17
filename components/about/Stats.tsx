import { Reveal } from "@/components/ui/Reveal";
const stats = [
  ["CSE", "STUDENT"],
  ["BACKEND", "FOCUS"],
  ["AI", "EXPLORER"],
  ["KOLKATA", "INDIA"],
  ["2004", "BORN"],
  ["SWIMMER-RUNNER", "HOBBIES"],
];
export function Stats() {
  return (
    <div className="stats">
      {stats.map(([value, label]) => (
        <Reveal key={value}>
          <strong>{value}</strong>
          <span>{label}</span>
        </Reveal>
      ))}
    </div>
  );
}
