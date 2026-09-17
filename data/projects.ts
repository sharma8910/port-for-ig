export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  theme: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "ASK MY NOTES\nKNOWLEDGE SYSTEM",
    description: "A RAG-powered knowledge system that lets you query your own PDFs and documents in natural language, with source-grounded answers.",
    technologies: ["FastAPI", "PostgreSQL", "Embeddings", "RAG"],
    theme: "violet",
    image: "/images/projects/ask-my-notes.jpeg"
  },
  {
    id: "02",
    title: "CHILD ONLINE SAFETY PROTOCOL\nAI SYSTEM",
    description: "Still working on this one — refining the safety flow and product experience while shaping the final AI moderation system.",
    technologies: ["Node.js", "Python", "ChromaDB", "Redis"],
    theme: "orange"
  },
  {
    id: "03",
    title: "IO.SOCIAL\nREALTIME SOCIAL PLATFORM",
    description: "A realtime social platform with authentication, posts, and live interactions, powered by WebSocket for instant messaging and presence updates.",
    technologies: ["MERN", "WebSocket", "JWT", "Cloudinary"],
    theme: "dark",
    image: "/images/projects/social-app.png"
  }
];
