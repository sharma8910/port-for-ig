import Image from "next/image";

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
        <Image
          src={image}
          alt={alt ?? "Project preview"}
          className="project-preview"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
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
