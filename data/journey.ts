export type JourneyStage = {
  id: string;
  stageNumber: string;
  phase: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  keySkills: string[];
  keyProjects: string[];
  mindsetShift: string;
  status: "Completed" | "Active Focus" | "Mastering";
};

export const journeyStages: JourneyStage[] = [
  {
    id: "dsa",
    stageNumber: "01",
    phase: "FOUNDATION",
    title: "DSA & Problem Solving",
    subtitle: "C++ • Arrays • Trees • Graphs • Dynamic Programming",
    period: "Phase 1",
    summary: "Built computational stamina by grinding algorithms in C++, understanding time complexity, memory allocation, and data structures from scratch.",
    keySkills: ["C++", "Pointers & Memory", "Trees & Binary Search", "Graphs BFS/DFS", "DP Memoization"],
    keyProjects: ["Algorithmic Pattern Solvers", "Custom Graph Traversal Engine"],
    mindsetShift: "From 'getting code to run' to 'optimizing time & space complexity'.",
    status: "Completed",
  },
  {
    id: "web-dev",
    stageNumber: "02",
    phase: "INTERFACES",
    title: "Web Development & Frontend",
    subtitle: "HTML5 • Modern CSS • JavaScript • React • Next.js",
    period: "Phase 2",
    summary: "Learned how the browser renders pixels, state management, event loops, component lifecycles, and modern responsive design systems.",
    keySkills: ["JavaScript (ES6+)", "TypeScript", "React 19", "Next.js App Router", "Tailwind CSS"],
    keyProjects: ["Sonu's Interactive Universe", "Responsive Web Interfaces"],
    mindsetShift: "From static markup to dynamic user interaction and UI state management.",
    status: "Completed",
  },
  {
    id: "backend",
    stageNumber: "03",
    phase: "SYSTEMS",
    title: "Backend & Distributed Infra",
    subtitle: "Node.js • Express • FastAPI • PostgreSQL • Redis • WebSockets",
    period: "Phase 3",
    summary: "Shifted focus to server architecture, RESTful API design, database schemas, authentication, caching topologies, and realtime socket communication.",
    keySkills: ["Node.js", "Express", "FastAPI", "PostgreSQL / SQL", "Redis Caching", "JWT Auth", "WebSockets"],
    keyProjects: ["IO.Social Realtime Platform", "Microservices Auth Gateway"],
    mindsetShift: "From single client state to server throughput, database indexing, and API contracts.",
    status: "Completed",
  },
  {
    id: "ai-rag",
    stageNumber: "04",
    phase: "INTELLIGENCE",
    title: "AI Systems & RAG Pipelines",
    subtitle: "Python • Vector DBs • Embeddings • LLM Grounding • ChromaDB",
    period: "Phase 4",
    summary: "Exploring artificial intelligence, building RAG knowledge systems that index raw document text into vector spaces for source-grounded LLM responses.",
    keySkills: ["Python", "FastAPI", "RAG Architecture", "OpenAI / HuggingFace Embeddings", "pgvector", "ChromaDB"],
    keyProjects: ["Ask My Notes Knowledge System", "Child Online Safety AI Protocol"],
    mindsetShift: "From deterministic logic to probabilistic LLM outputs grounded by vector context.",
    status: "Active Focus",
  },
  {
    id: "infra",
    stageNumber: "05",
    phase: "DEPLOYMENT",
    title: "Systems, Docker & Build in Public",
    subtitle: "Linux • Docker • CI/CD • System Design • Instagram @sonu.cs_2004",
    period: "Current",
    summary: "Containerizing backend workloads, studying high-availability system architecture (ByteByteGo), and sharing every step live on Instagram.",
    keySkills: ["Docker", "Linux Shell", "System Design", "Build in Public", "Tech Content Creation"],
    keyProjects: ["Developer Command Center", "Interactive Resource Vault"],
    mindsetShift: "Building systems that scale in production while empowering other developers to learn.",
    status: "Active Focus",
  }
];

export const journeySummary = [
  { day: "START", text: "Began with web development & C++ programming fundamentals" },
  { day: "BUILD", text: "Deepened into backend engineering, databases, and system design" },
  { day: "EXPLORE", text: "Ventured into AI, vector databases, RAG pipelines, and LLM-powered applications" },
  { day: "NOW", text: "Building production-grade backend + AI systems & documenting live on Instagram" },
  { day: "SHARPEN", text: "Strengthened algorithmic problem solving through DSA and system patterns" },
];