export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  challenges: string[];
  learnings: string[];
  theme: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "Production" | "Active Build" | "Prototyping";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "ASK MY NOTES\nKNOWLEDGE SYSTEM",
    tagline: "RAG-Powered Personal Knowledge Engine",
    description: "A RAG-powered knowledge system that lets you query your own PDFs and documents in natural language, with source-grounded answers.",
    problem: "Navigating through lengthy PDFs, course materials, and lecture notes manually takes hours when looking for precise technical answers.",
    solution: "Built an end-to-end RAG pipeline that ingests PDFs, chunks text semantically, generates vector embeddings, stores them in PostgreSQL with pgvector, and retrieves grounded context for LLM response generation.",
    architecture: [
      "PDF Upload & Semantic Text Chunking",
      "Vector Embeddings Generation via OpenAI / HuggingFace",
      "Vector Similarity Search via PostgreSQL (pgvector)",
      "Context Assembly & Prompt Synthesis",
      "Streaming Answer Generation via FastAPI API"
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "pgvector", "Embeddings", "RAG", "Next.js"],
    challenges: [
      "Optimizing chunk overlapping strategy to preserve code snippet context.",
      "Reducing vector search latency under 80ms across thousands of document pages."
    ],
    learnings: [
      "Deep understanding of vector distance metrics (Cosine vs L2).",
      "How to design fallback prompts when context confidence is below threshold."
    ],
    theme: "violet",
    image: "/images/projects/ask-my-notes.jpeg",
    githubUrl: "https://github.com/sharma8910/ask-my-notes",
    status: "Active Build",
    
  },
  {
    id: "02",
    title: "CHILD ONLINE SAFETY PROTOCOL\nAI SYSTEM",
    tagline: "Realtime AI Moderation & Threat Shield",
    description: "Refining the safety flow and product experience while shaping the final AI moderation system for young internet users.",
    problem: "Online communication platforms expose younger users to harmful content, cyberbullying, and unsafe interactions without proactive realtime safeguards.",
    solution: "Building an automated safety gateway combining NLP toxicity scoring, ChromaDB vector indexing of unsafe patterns, and fast Redis state caching for immediate automated flagging.",
    architecture: [
      "Inbound Content Stream & Event Listener",
      "Fast Redis In-Memory Rate & State Check",
      "ChromaDB Vector Matching against Threat Pattern Database",
      "Multi-label NLP Classification Engine",
      "Automated Moderation & Guardian Notification Webhook"
    ],
    technologies: ["Node.js", "Python", "ChromaDB", "Redis", "FastAPI", "Docker"],
    challenges: [
      "Eliminating false positives in conversational slang.",
      "Achieving sub-50ms moderation response time without blocking user message streams."
    ],
    learnings: [
      "Event-driven backend architecture using Redis pub/sub.",
      "Designing human-in-the-loop audit logs for safety moderation."
    ],
    theme: "orange",
    githubUrl: "https://github.com/sharma8910",
    status: "Active Build"
  },
  {
    id: "03",
    title: "IO.SOCIAL\nREALTIME SOCIAL PLATFORM",
    tagline: "Scalable Fullstack Social Engine with WebSockets",
    description: "A realtime social platform with authentication, posts, and live interactions, powered by WebSocket for instant messaging and presence updates.",
    problem: "Traditional HTTP polling creates unnecessary server overhead and delayed user interaction in social networking applications.",
    solution: "Engineered a realtime event pipeline using WebSockets for instant message delivery, live user presence counters, and JWT-authenticated session persistence.",
    architecture: [
      "React Frontend with Custom Socket Hooks",
      "Node.js / Express Gateway with Socket.io Engine",
      "JWT Stateless Auth & Secure Cookie Management",
      "MongoDB Document Storage & Indexing",
      "Cloudinary Media Pipeline for Image Uploads"
    ],
    technologies: ["MERN", "Node.js", "Express", "MongoDB", "WebSocket", "JWT", "Cloudinary"],
    challenges: [
      "Managing WebSocket connection reconnection logic on flaky mobile networks.",
      "Handling concurrent media uploads with Cloudinary signed webhooks."
    ],
    learnings: [
      "State synchronization patterns across client and server.",
      "JWT token refresh strategies and XSS/CSRF mitigation."
    ],
    theme: "dark",
    image: "/images/projects/social-app.png",
    githubUrl: "https://github.com/sharma8910/io-social-app",
    status: "Production",
    liveUrl: " https://io-social-app-frontend.vercel.app"
  }
];
