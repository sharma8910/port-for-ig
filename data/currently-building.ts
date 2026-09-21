export type CurrentlyBuilding = {
  projectTitle: string;
  tagline: string;
  progressPercent: number;
  activeBranch: string;
  statusText: string;
  techStack: string[];
  learningTarget: string;
  lastUpdated: string;
  githubUrl: string;
};

export const currentlyBuildingData: CurrentlyBuilding = {
  projectTitle: "CHILD ONLINE SAFETY PLATFORM",
  tagline: "AI-Powered Parental Control System",
  progressPercent: 80,
  activeBranch: "feature/ai-domain-classification",
  statusText: "Wired a Python AI worker into the Node backend: unclassified domains get fetched, embedded, and matched against category examples in ChromaDB, with Redis caching the results.",
  techStack: ["Node.js", "Express", "MongoDB Atlas", "Redis", "React", "Chrome Extension (MV3)", "FastAPI", "sentence-transformers", "ChromaDB"],
  learningTarget: "Building a full-stack system end-to-end: browser extension enforcement, cache invalidation strategy, and semantic classification with local embeddings instead of an LLM API.",
  lastUpdated: "Active Today",
  githubUrl: "https://github.com/sharma8910",
};
