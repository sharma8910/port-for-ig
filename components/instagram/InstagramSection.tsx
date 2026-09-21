"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Sparkles,
  X,
  ExternalLink,
  Code,
  BookOpen,
  Users,
} from "lucide-react";
import type { SVGProps } from "react";

function InstagramMark({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      width={size}
      {...props}
    >
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.45" cy="6.65" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

type InstagramPost = {
  id: string;
  image: string;
  caption: string;
  topicTag: string;
  type: "REEL" | "POST";
  deeperExplanation: string;
  codeOrKeyConcept: string;
  relatedResourceName: string;
  relatedResourceLink: string;
};

const posts: InstagramPost[] = [
  {
    id: "post-1",
    image: "/images/instagram/cost-of-learning.jpg",
    caption: "The Real Cost of Learning System Design — One Focused Session at a Time.",
    topicTag: "SYSTEM DESIGN",
    type: "REEL",
    deeperExplanation:
      "Learning how to design distributed systems takes consistency over intensity. In this reel, I broke down how to approach load balancing, caching tiers, and API gateway routing.",
    codeOrKeyConcept: "Consistent Hashing & Cache Eviction (LRU vs LFU)",
    relatedResourceName: "System Design Reference PDF",
    relatedResourceLink: "https://drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV/view?usp=drivesdk",
  },
  {
    id: "post-2",
    image: "/images/instagram/rag-architecture.jpg",
    caption: "RAG Architecture Notes, Experiments, and Chunking Strategies.",
    topicTag: "AI / RAG",
    type: "POST",
    deeperExplanation:
      "A deep dive into document chunking strategies. Small chunks retain precision; large chunks preserve context. The sweet spot is 512 tokens with 50-token overlap.",
    codeOrKeyConcept: "Cosine Similarity: cos(θ) = (A · B) / (||A|| ||B||)",
    relatedResourceName: "RAG Architecture Guide PDF",
    relatedResourceLink: "https://drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I/view?usp=drivesdk",
  },
  {
    id: "post-3",
    image: "/images/instagram/vibe-coders.jpg",
    caption: "Late Night Coder Energy — Debugging WebSockets & Async Python.",
    topicTag: "BACKEND LOGIC",
    type: "REEL",
    deeperExplanation:
      "Late night session fixing concurrency bottlenecks in FastAPI coroutines and client socket reconnect handlers for IO.Social.",
    codeOrKeyConcept: "asyncio.gather(*tasks) & Exception Shielding",
    relatedResourceName: "IO.Social Case Study",
    relatedResourceLink: "#work",
  },
  {
    id: "post-4",
    image: "/images/instagram/job-ready.jpg",
    caption: "Day 2 of Building Habits That Make Me Job Ready.",
    topicTag: "BUILD IN PUBLIC",
    type: "POST",
    deeperExplanation:
      "Focusing on what recruiters and senior engineers actually look for: production-ready git commits, clean modular code, unit tests, and documented APIs.",
    codeOrKeyConcept: "API Contracts & Pydantic Schema Validation",
    relatedResourceName: "Sonu's Developer Journey Roadmap",
    relatedResourceLink: "#journey",
  },
];

const tags = [
  ["REELS", "Learning | Projects | Life"],
  ["POSTS", "Progress | Notes | Moments"],
  ["BUILDING", "Projects | Experiments"],
];

export function InstagramSection() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [communityCount, setCommunityCount] = useState(0);

  useEffect(() => {
    const target = 1430;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const animateCount = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCommunityCount(Math.round(target * easedProgress));

      if (progress < 1) {
        frame = requestAnimationFrame(animateCount);
      }
    };

    frame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="section instagram-section" id="instagramSection">
      <div className="instagram-container">
        {/* Left Column - Creator Bio */}
        <div className="insta-copy">
          <div className="eyebrow">07 / FROM INSTAGRAM FEED</div>
          <h2 className="insta-title">
            BUILD IN
            <br />
            <em className="orange">PUBLIC.</em>
          </h2>
          <p className="insta-intro">
            My Instagram feed is where the spark happens — real-time updates, short reels, study notes, and late-night coding sessions. Here on my website is where the code &amp; PDFs expand.
          </p>

          <a
            className="insta-follow-btn"
            href="https://instagram.com/sonu.cs_2004"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramMark size={18} /> Follow @sonu.cs_2004{" "}
            <ArrowUpRight size={16} />
          </a>

          <div className="insta-tag-block">
            <div className="tag-block-title">CONTENT CATEGORIES</div>
            <div className="tag-list">
              {tags.map(([label, detail]) => (
                <div className="tag-row" key={label}>
                  <strong className="tag-label">{label}</strong>
                  <span className="tag-detail">{detail}</span>
                </div>
              ))}
            </div>
            <div className="insta-community-count" aria-label="1430 people in the community">
              <div className="community-count-icon">
                <Users size={15} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <strong>{communityCount.toLocaleString()}+</strong>
                <span>people in the community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Feed Grid */}
        <div className="insta-feed-box">
          <div className="feed-header">
            <div className="feed-header-left">
              <InstagramMark className="text-orange" size={24} />
              <div>
                <div className="feed-title">LATEST FROM @sonu.cs_2004</div>
                <div className="feed-subtitle">Click any reel or post to view deep-dive notes</div>
              </div>
            </div>
            <a
              className="feed-view-all"
              href="https://instagram.com/sonu.cs_2004"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="insta-grid">
            {posts.map((post) => (
              <motion.article
                className="insta-post-card group"
                key={post.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedPost(post);
                  }
                }}
              >
                <div className="post-media-wrap">
                  <Image
                    className="post-image"
                    src={post.image}
                    alt={post.caption}
                    width={500}
                    height={600}
                    sizes="(max-width: 639px) 100vw, 50vw"
                  />
                  <div className="post-overlay-chip">
                    <span>{post.type}</span> • <span>{post.topicTag}</span>
                  </div>
                </div>
                <div className="post-card-body">
                  <p className="post-caption">{post.caption}</p>
                  <div className="post-card-footer">
                    <span className="expand-note-link">
                      <Sparkles size={13} /> Deep Dive Notes
                    </span>
                    <ArrowUpRight size={14} className="arrow-icon" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Post Deep-Dive Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="modal-container insta-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="instagram-modal-title"
            >
              <div className="modal-header">
                <div className="modal-header-meta">
                  <span className="post-modal-badge">{selectedPost.type}</span>
                  <span className="post-modal-topic">{selectedPost.topicTag}</span>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close post details"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="insta-modal-body">
                <div className="insta-modal-grid">
                  <div className="insta-modal-media">
                    <Image
                      src={selectedPost.image}
                      alt={selectedPost.caption}
                      width={600}
                      height={750}
                      className="modal-post-img"
                    />
                  </div>

                  <div className="insta-modal-details">
                    <h3 id="instagram-modal-title" className="insta-modal-caption">{selectedPost.caption}</h3>

                    <div className="insta-modal-section">
                      <span className="section-label">
                        <BookOpen size={15} className="text-orange" /> WHAT I BUILT / LEARNED
                      </span>
                      <p className="insta-modal-text">
                        {selectedPost.deeperExplanation}
                      </p>
                    </div>

                    <div className="insta-modal-section">
                      <span className="section-label">
                        <Code size={15} className="text-orange" /> KEY CONCEPT / CODE HIGHLIGHT
                      </span>
                      <code className="insta-modal-code">
                        {selectedPost.codeOrKeyConcept}
                      </code>
                    </div>

                    <div className="insta-modal-section">
                      <span className="section-label">CONNECTED RESOURCE</span>
                      <a
                        href={selectedPost.relatedResourceLink}
                        target="_blank"
                        rel="noreferrer"
                        className="insta-resource-link"
                      >
                        <span>{selectedPost.relatedResourceName}</span>
                        <ExternalLink size={15} />
                      </a>
                    </div>

                    <a
                      href="https://instagram.com/sonu.cs_2004"
                      target="_blank"
                      rel="noreferrer"
                      className="view-on-ig-btn"
                    >
                      <InstagramMark size={16} /> View Original Reel on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
