export type ResourceCategory =
  | "ALL"
  | "AI / RAG"
  | "SYSTEM DESIGN"
  | "BACKEND"
  | "DSA"
  | "WEB DEV"
  | "PYTHON"
  | "INFRA";

export type ResourceItem = {
  id: string;
  title: string;
  category: ResourceCategory;
  type: "PDF Guide" | "Playlist" | "Architecture Note" | "Cheat Sheet" | "Video Tutorial";
  description: string;
  creatorOrSource: string;
  link: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  highlights: string[];
  pdfUrl?: string;
  isFeatured?: boolean;
};

export const resourceCategories: ResourceCategory[] = [
  "ALL",
  "AI / RAG",
  "SYSTEM DESIGN",
  "BACKEND",
  "DSA",
  "WEB DEV",
  "PYTHON",
  "INFRA",
];

export const resources: ResourceItem[] = [
  {
    id: "res-rag-pdf",
    title: "RAG Architecture Complete Guide (PDF)",
    category: "AI / RAG",
    type: "PDF Guide",
    description: "My curated breakdown of Retrieval-Augmented Generation pipelines — embeddings, chunking strategies, vector databases, and prompt grounding.",
    creatorOrSource: "Sonu's Notes (Google Drive)",
    link: "https://drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I/view?usp=drivesdk",
    pdfUrl: "https://drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I/view?usp=drivesdk",
    difficulty: "Intermediate",
    highlights: ["Semantic Chunking", "Vector Search with pgvector", "RAG Evaluation Metrics"],
    isFeatured: true,
  },
  {
    id: "res-sysdes-pdf",
    title: "System Design Handcrafted Reference (PDF)",
    category: "SYSTEM DESIGN",
    type: "PDF Guide",
    description: "Visual system design notes covering rate limiters, load balancing, caching topologies, database sharding, and message queues.",
    creatorOrSource: "Sonu's Notes (Google Drive)",
    link: "https://drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV/view?usp=drivesdk",
    pdfUrl: "https://drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV/view?usp=drivesdk",
    difficulty: "Advanced",
    highlights: ["Distributed Caching", "API Gateway Patterns", "Database Replication"],
    isFeatured: true,
  },
  {
    id: "res-sysdes-video",
    title: "System Design & Microservices Masterclass",
    category: "SYSTEM DESIGN",
    type: "Playlist",
    description: "The core video tutorials I watched to master real-world scalable backend architectures and distributed system trade-offs.",
    creatorOrSource: "ByteByteGo & Piyush Garg",
    link: "https://youtu.be/lFeYU31TnQ8?si=c4q4mWMEQZ0H51U2",
    difficulty: "Intermediate",
    highlights: ["CAP Theorem in practice", "Consistent Hashing", "WebSockets vs Server-Sent Events"],
    isFeatured: true,
  },
  {
    id: "res-web-video",
    title: "Fullstack Web & System Foundations",
    category: "WEB DEV",
    type: "Playlist",
    description: "Deep dive into web development fundamentals, HTTP lifecycle, DOM rendering, and production web servers.",
    creatorOrSource: "Code With Harry & Harkirat Singh",
    link: "https://youtu.be/tVzUXW6siu0?si=IbshwJmK6JRYYNME",
    difficulty: "Beginner",
    highlights: ["HTTP/1.1 vs HTTP/2", "Asynchronous JavaScript", "SSR vs CSR"],
  },
  {
    id: "res-rag-video",
    title: "Practical Vector Search & LLM Orchestration",
    category: "AI / RAG",
    type: "Video Tutorial",
    description: "Hands-on walkthrough building document query tools using LangChain, Llamaindex, and vector indices.",
    creatorOrSource: "AI Engineering Community",
    link: "https://youtu.be/o126p1QN_RI?si=QFplvgF_U_YhLlbT",
    difficulty: "Intermediate",
    highlights: ["Cosine Similarity", "Embedding Models Comparison", "Context Window Management"],
  },
  {
    id: "res-dsa-video",
    title: "Data Structures & Algorithms Problem Patterns",
    category: "DSA",
    type: "Playlist",
    description: "Tree traversals, graph algorithms (BFS/DFS), dynamic programming, and two-pointer techniques ground up in C++.",
    creatorOrSource: "Striver & DSA Experts",
    link: "https://youtu.be/0bHoB32fuj0?si=DXq0840JohpMUfWi",
    difficulty: "Intermediate",
    highlights: ["Graph BFS/DFS Patterns", "Dynamic Programming Memoization", "Binary Search Boundaries"],
    isFeatured: true,
  },
  {
    id: "res-python-video",
    title: "Asynchronous Python & FastAPI Deep Dive",
    category: "PYTHON",
    type: "Video Tutorial",
    description: "Trading callbacks for coroutines — learning `asyncio`, event loops, Pydantic schemas, and FastAPI dependencies.",
    creatorOrSource: "Python Backend Community",
    link: "https://youtu.be/eWRfhZUzrAc?si=TIl3AiLIaxjuYiTA",
    difficulty: "Intermediate",
    highlights: ["asyncio Event Loop", "Pydantic V2 Validation", "Dependency Injection"],
  },
  {
    id: "res-infra-docker",
    title: "Containerization & Linux Backend Essentials",
    category: "INFRA",
    type: "Cheat Sheet",
    description: "Docker multi-stage builds, environment isolation, Nginx reverse proxies, and system monitoring.",
    creatorOrSource: "Sonu's Lab Notes",
    link: "https://youtube.com/playlist?list=PLzMcBGfZo4-nUIIMsz040W_X-03QH5c5h&si=uu2AxqE_3GVAmv-E",
    difficulty: "Intermediate",
    highlights: ["Docker Multi-Stage Builds", "Nginx Reverse Proxy", "Process Management with PM2"],
  },
];
