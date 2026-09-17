"use client";
import Image from "next/image";
import { motion } from "motion/react";

type BuildLogItemProps = {
  index: number;
  text: string;
  category: string;
  logo: string;
  link: string;
};

export function BuildLogItem({
  index,
  text,
  category,
  logo,
  link,
}: BuildLogItemProps) {
  return (
    <a
      className="log-link"
      href={link}
      aria-label={`${text} (${category})`}
    >
      <motion.article
        className="log-item"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <span>SRC /0{index + 1}</span>
        <Image
          className="log-logo"
          src={logo}
          alt={`${category} logo`}
          width={34}
          height={34}
        />
        <p>{text}</p>
        <b>↗</b>
      </motion.article>
    </a>
  );
}
