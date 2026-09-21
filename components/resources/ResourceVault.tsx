"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  resources,
  resourceCategories,
  type ResourceCategory,
  type ResourceItem,
} from "@/data/resources";
import {
  FileText,
  PlayCircle,
  Video,
  BookOpen,
  ArrowUpRight,
  Search,
  Sparkles,
  Download,
} from "lucide-react";

export function ResourceVault() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((res) => {
    const matchesCategory =
      activeCategory === "ALL" || res.category === activeCategory;
    const matchesQuery =
      searchQuery === "" ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.creatorOrSource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const getResourceIcon = (type: ResourceItem["type"]) => {
    switch (type) {
      case "PDF Guide":
        return <FileText size={18} className="text-orange" />;
      case "Playlist":
        return <PlayCircle size={18} className="text-orange" />;
      case "Video Tutorial":
        return <Video size={18} className="text-orange" />;
      default:
        return <BookOpen size={18} className="text-orange" />;
    }
  };

  return (
    <section className="section resource-vault" id="resources">
      <div className="vault-header">
        <div>
          <div className="eyebrow">04 / RESOURCE VAULT & LEARNING LAB</div>
          <h2 className="vault-title">
            LEARNING
            <br />
            <em>TOOLKIT.</em>
          </h2>
        </div>
        <p className="vault-intro">
          The actual PDFs, playlists, creators, and engineering notes I use daily on my developer journey. Direct access to what helped me build systems.
        </p>
      </div>

      <div className="vault-controls">
        <div className="vault-tabs" role="group" aria-label="Resource categories">
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              aria-pressed={activeCategory === cat}
              className={`vault-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="vault-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search PDFs, topics, creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="vault-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <motion.div className="resource-grid" layout>
        <AnimatePresence>
          {filteredResources.map((res) => (
            <motion.article
              key={res.id}
              className={`resource-card ${res.isFeatured ? "featured-resource" : ""}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className="resource-card-top">
                <div className="resource-type-badge">
                  {getResourceIcon(res.type)}
                  <span>{res.type}</span>
                </div>
                <span className={`diff-badge diff-${res.difficulty.toLowerCase()}`}>
                  {res.difficulty}
                </span>
              </div>

              <h3 className="resource-card-title">{res.title}</h3>

              <div className="resource-source">
                <span>By {res.creatorOrSource}</span>
              </div>

              <p className="resource-desc">{res.description}</p>

              <div className="resource-highlights">
                {res.highlights.map((h) => (
                  <span className="highlight-tag" key={h}>
                    • {h}
                  </span>
                ))}
              </div>

              <div className="resource-card-bottom">
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`resource-action-btn ${res.pdfUrl ? "pdf-btn" : "link-btn"}`}
                >
                  {res.pdfUrl ? (
                    <>
                      <Download size={15} /> Open PDF Guide
                    </>
                  ) : (
                    <>
                      <Sparkles size={15} /> Watch / Access
                    </>
                  )}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredResources.length === 0 && (
        <div className="vault-empty-state">
          <p>No resources found matching &quot;{searchQuery}&quot;.</p>
          <button
            className="reset-vault-btn"
            onClick={() => {
              setActiveCategory("ALL");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
