"use client";
import { motion } from "motion/react";
export function TerminalMode() {
  return (
    <section className="terminal-section">
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        sonu@portfolio:~
      </div>
      <motion.div
        className="terminal-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>
          <b>sonu@portfolio:~$</b> whoami
        </p>
        <p className="output">
          &gt; CSE student
          <br />
          &gt; backend developer
          <br />
          &gt; AI builder
          <br />
          &gt; self-learner
        </p>
        <p>
          <b>sonu@portfolio:~$</b> ls projects/
        </p>
        <p className="output">
          &gt; ask-my-notes/
          <br />
          &gt; child-online-safety-protocol/
          <br />
          &gt; io-social/
        </p>
        <p>
          <b>sonu@portfolio:~$</b> <i>_</i>
        </p>
      </motion.div>
    </section>
  );
}
