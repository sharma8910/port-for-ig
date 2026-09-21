"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from "lucide-react";

type HistoryItem = {
  command: string;
  output: ReactNode;
};

export function TerminalMode() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "whoami",
      output: (
        <div>
          &gt; CSE Student &amp; Backend / AI Developer Kolkata, India
          <br />
          &gt; Focus: Distributed Systems, FastAPI, PostgreSQL, RAG Pipelines
          <br />
          &gt; Building in Public on Instagram: @sonu.cs_2004
        </div>
      ),
    },
    {
      command: "ls projects/",
      output: (
        <div>
          &gt; 01. ask-my-notes/ [RAG Knowledge System]
          <br />
          &gt; 02. child-online-safety-protocol/ [AI Moderation Engine]
          <br />
          &gt; 03. io-social/ [Realtime WebSocket Platform]
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let output: ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div>
            Available commands:
            <br />
            • <strong className="cmd-keyword">whoami</strong> — Learn about Sonu
            <br />
            • <strong className="cmd-keyword">projects</strong> (or <strong className="cmd-keyword">ls projects/</strong>) — List projects
            <br />
            • <strong className="cmd-keyword">resources</strong> (or <strong className="cmd-keyword">pdfs</strong>) — Study guides &amp; PDFs
            <br />
            • <strong className="cmd-keyword">skills</strong> — Tech stack breakdown
            <br />
            • <strong className="cmd-keyword">cat RAG.pdf</strong> — Access RAG Guide PDF
            <br />
            • <strong className="cmd-keyword">cat SystemDesign.pdf</strong> — Access System Design PDF
            <br />
            • <strong className="cmd-keyword">contact</strong> — Get social links &amp; email
            <br />
            • <strong className="cmd-keyword">clear</strong> — Clear terminal screen
            <br />
            • <strong className="cmd-keyword">sudo hire</strong> — Run hire protocol
          </div>
        );
        break;

      case "whoami":
        output = (
          <div>
            &gt; Sonu Sharma — Backend &amp; AI Builder
            <br />
            &gt; Passionate about vector databases, system architecture, and API design.
            <br />
            &gt; Instagram: instagram.com/sonu.cs_2004
          </div>
        );
        break;

      case "projects":
      case "ls projects/":
      case "ls projects":
        output = (
          <div>
            &gt; [1] ASK MY NOTES — RAG-Powered PDF Knowledge Engine
            <br />
            &gt; [2] CHILD ONLINE SAFETY — AI Moderation Gateway
            <br />
            &gt; [3] IO.SOCIAL — Realtime WebSocket Social Engine
          </div>
        );
        break;

      case "resources":
      case "pdfs":
      case "ls resources/":
        output = (
          <div>
            &gt; RAG Architecture Guide (PDF): drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I
            <br />
            &gt; System Design Handcrafted Notes (PDF): drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV
            <br />
            &gt; Recommended Creators: ByteByteGo, Piyush Garg, CodeWithHarry, Harkirat
          </div>
        );
        break;

      case "skills":
        output = (
          <div>
            &gt; BACKEND: Node.js, Express, FastAPI, Python
            <br />
            &gt; DATABASE: PostgreSQL, pgvector, MongoDB, Redis
            <br />
            &gt; AI &amp; RAG: Vector Embeddings, ChromaDB, LLM Grounding
            <br />
            &gt; INFRA &amp; TOOLS: Docker, Linux Shell, Git, REST, WebSockets
            <br />
            &gt; LANGUAGES: C++, Python, JavaScript, TypeScript, C, Java
          </div>
        );
        break;

      case "cat rag.pdf":
      case "cat rag":
        window.open(
          "https://drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I/view?usp=drivesdk",
          "_blank"
        );
        output = <div>&gt; Opening RAG Architecture Guide PDF in new tab...</div>;
        break;

      case "cat systemdesign.pdf":
      case "cat systemdesign":
      case "cat sysdes.pdf":
        window.open(
          "https://drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV/view?usp=drivesdk",
          "_blank"
        );
        output = <div>&gt; Opening System Design Reference PDF in new tab...</div>;
        break;

      case "contact":
        output = (
          <div>
            &gt; Email: stanyoourt@gmail.com
            <br />
            &gt; GitHub: github.com/sharma8910
            <br />
            &gt; LinkedIn: linkedin.com/in/sonu-sharma-955740371
            <br />
            &gt; Instagram: instagram.com/sonu.cs_2004
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo hire":
      case "sudo hire sonu":
        output = (
          <div className="sudo-success">
            [ACCESS GRANTED] 🎉
            <br />
            Sonu is ready to build scalable backend systems and AI applications for your team!
            <br />
            Email direct: stanyoourt@gmail.com
          </div>
        );
        break;

      default:
        output = (
          <div>
            Command not recognized: &quot;{trimmed}&quot;. Type <strong className="cmd-keyword">help</strong> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const presetCmds = [
    "whoami",
    "projects",
    "resources",
    "skills",
    "cat RAG.pdf",
    "contact",
    "sudo hire",
  ];

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={14} className="inline-icon" /> sonu@portfolio:~ (SonuOS Shell)
        </div>
        <button
          className="clear-terminal-btn"
          onClick={() => handleCommand("clear")}
          title="Clear screen"
        >
          <RefreshCw size={13} />
        </button>
      </div>

      <motion.div
        className="terminal-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="terminal-welcome">
          Welcome to <strong className="orange">SonuOS CLI</strong>. Type commands or click the shortcut chips below to explore!
        </div>

        {/* Preset Command Shortcuts */}
        <div className="terminal-presets">
          {presetCmds.map((cmd) => (
            <button
              key={cmd}
              className="preset-chip"
              onClick={() => handleCommand(cmd)}
            >
              <Sparkles size={12} /> ${cmd}
            </button>
          ))}
        </div>

        {/* Command Execution History */}
        <div className="terminal-history">
          {history.map((item, i) => (
            <div className="history-block" key={i}>
              <div className="prompt-line">
                <span className="user-host">sonu@portfolio:~$</span>
                <span className="cmd-entered">{item.command}</span>
              </div>
              <div className="output-line">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Live Input Prompt */}
        <form
          className="prompt-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
        >
          <span className="user-host">sonu@portfolio:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help'..."
            aria-label="Terminal command input"
          />
          <button type="submit" className="terminal-send-btn" aria-label="Run command">
            <CornerDownLeft size={14} />
          </button>
        </form>
        <div ref={endRef} />
      </motion.div>
    </section>
  );
}
