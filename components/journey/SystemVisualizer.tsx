"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Cpu, Database, Globe, Zap, Server, MessageSquare } from "lucide-react";

type PipelineStep = {
  id: string;
  name: string;
  icon: typeof Globe;
  protocol: string;
  latencyTarget: string;
  description: string;
  payloadExample: string;
  techUsed: string[];
};

const pipelineSteps: PipelineStep[] = [
  {
    id: "user",
    name: "01. USER REQUEST",
    icon: Globe,
    protocol: "HTTPS / REST / WSS",
    latencyTarget: "< 10ms",
    description: "Client submits natural language question or action trigger via Next.js client interface.",
    payloadExample: '{\n  "query": "Explain RAG chunking",\n  "userId": "usr_9918",\n  "format": "stream"\n}',
    techUsed: ["Next.js", "React Hooks", "TypeScript"],
  },
  {
    id: "api",
    name: "02. API GATEWAY",
    icon: Zap,
    protocol: "FastAPI / CORS / Rate-Limit",
    latencyTarget: "< 15ms",
    description: "Validates incoming JSON payload, checks rate limits in Redis, and authenticates user session token.",
    payloadExample: '{\n  "status": "authenticated",\n  "rateLimitRemaining": 98,\n  "tenant": "sonu_lab"\n}',
    techUsed: ["FastAPI", "Pydantic V2", "Redis Rate Limiter"],
  },
  {
    id: "backend",
    name: "03. BACKEND ORCHESTRATION",
    icon: Server,
    protocol: "Async Python / Coroutines",
    latencyTarget: "< 35ms",
    description: "Orchestrates text parsing, semantic chunking, and dispatches parallel vector embedding requests.",
    payloadExample: '{\n  "embeddingInput": "Explain RAG chunking",\n  "vectorDim": 1536,\n  "model": "text-embedding-3-small"\n}',
    techUsed: ["Python asyncio", "FastAPI", "HTTPX"],
  },
  {
    id: "vector",
    name: "04. VECTOR RETRIEVAL",
    icon: Database,
    protocol: "Cosine Similarity / pgvector",
    latencyTarget: "< 45ms",
    description: "Performs top-k vector similarity search in PostgreSQL to retrieve relevant PDF text context.",
    payloadExample: '[\n  {\n    "chunkId": "doc_rag_42",\n    "similarity": 0.892,\n    "text": "Chunking splits text into overlapping windows..."\n  }\n]',
    techUsed: ["PostgreSQL", "pgvector", "ChromaDB"],
  },
  {
    id: "llm",
    name: "05. PROMPT SYNTHESIS",
    icon: Cpu,
    protocol: "OpenAI API / Streaming",
    latencyTarget: "< 300ms",
    description: "Injects retrieved context into system prompt and streams natural language answer back to client.",
    payloadExample: '{\n  "prompt": "Context: [Chunk 42]... Question: Explain RAG chunking",\n  "temperature": 0.2\n}',
    techUsed: ["OpenAI API", "Streaming SSE", "RAG Prompt Template"],
  },
  {
    id: "response",
    name: "06. STREAMED RESPONSE",
    icon: MessageSquare,
    protocol: "Server-Sent Events (SSE)",
    latencyTarget: "< 400ms Total",
    description: "Renders source-grounded answer token by token on client UI with citation links.",
    payloadExample: '{\n  "answerToken": "Chunking",\n  "sources": ["RAG Architecture Guide (PDF)"]\n}',
    techUsed: ["Next.js EventSource", "Markdown Renderer"],
  },
];

export function SystemVisualizer() {
  const [selectedStepId, setSelectedStepId] = useState<string>("vector");

  const activeStep =
    pipelineSteps.find((s) => s.id === selectedStepId) || pipelineSteps[3];

  return (
    <div className="system-visualizer-wrap">
      <div className="system-visualizer-header">
        <span className="eyebrow-dark">SYSTEM ARCHITECTURE IN MOTION</span>
        <h3 className="system-vis-title">
          HOW A REQUEST TRAVERSES MY <em>BACKEND.</em>
        </h3>
        <p className="system-vis-desc">
          Interactive execution path of my RAG Knowledge System. Click any node to inspect protocol headers, target latency, and payload schemas.
        </p>
      </div>

      <div className="visualizer-grid">
        {/* Pipeline Nodes List */}
        <div className="pipeline-nodes-column">
          {pipelineSteps.map((step, index) => {
            const isSelected = step.id === selectedStepId;
            const Icon = step.icon;
            return (
              <div key={step.id} className="pipeline-node-item">
                <button
                  className={`pipeline-node-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelectedStepId(step.id)}
                >
                  <Icon size={18} className="node-icon" />
                  <span className="node-name">{step.name}</span>
                  <span className="node-protocol">{step.protocol}</span>
                </button>
                {index < pipelineSteps.length - 1 && (
                  <div className="pipeline-connector">
                    <ArrowDown size={14} className="connector-arrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Inspector Panel */}
        <div className="step-inspector-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              className="inspector-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <div className="inspector-head">
                <div>
                  <span className="inspector-step-num">{activeStep.name}</span>
                  <h4 className="inspector-title">{activeStep.protocol}</h4>
                </div>
                <div className="latency-chip">
                  <span>TARGET LATENCY:</span>
                  <strong>{activeStep.latencyTarget}</strong>
                </div>
              </div>

              <p className="inspector-desc">{activeStep.description}</p>

              <div className="inspector-section">
                <span className="section-label">PAYLOAD & DATA SCHEMA</span>
                <pre className="code-block">
                  <code>{activeStep.payloadExample}</code>
                </pre>
              </div>

              <div className="inspector-section">
                <span className="section-label">TECHNOLOGIES INVOLVED</span>
                <div className="tech-tags-wrap">
                  {activeStep.techUsed.map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
