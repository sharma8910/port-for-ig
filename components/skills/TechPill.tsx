export function TechPill({ children }: { children: string }) {
  return (
    <span className="stack-pill">
      {children}
      <i>↗</i>
    </span>
  );
}
