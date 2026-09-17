export function ProjectImage({
  theme,
  number,
  image,
  alt,
}: {
  theme: string;
  number: string;
  image?: string;
  alt?: string;
}) {
  return (
    <div className={`project-image ${theme}`}>
      {image ? (
        <img src={image} alt={alt ?? "Project preview"} className="project-preview" />
      ) : (
        <div className="code-window">
          <span />
          <span />
          <span />
          <pre>{`// BUILDing_currently_${number}\nconst idea = working on it;\nawait makeItWork(idea);\nreturn system;`}</pre>
        </div>
      )}
      <div className="project-orbit">BACKEND • AI • BUILD •</div>
    </div>
  );
}
