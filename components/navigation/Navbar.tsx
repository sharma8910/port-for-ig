"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";
const links = [
  { label: "HOME", href: "#top" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "BUILD/SOURCE", href: "#building" },
  { label: "CONTACT", href: "#contact" },
];
export function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main navigation">
        <a className="nav-logo" href="#top">
          <Image
            className="nav-logo-image"
            src="/images/profile/nav-logo.png"
            alt=""
            width={34}
            height={34}
          />
          <span>sonu . cs_2004</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={active === link.label ? "active" : ""}
            >
              {active === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <MobileMenu open={open} />
    </header>
  );
}
