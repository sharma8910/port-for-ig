"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { BriefcaseBusiness, Home, Library, Mail, Menu, Route, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export const navLinks = [
  { label: "HOME", href: "#top" },
 
  { label: "WORK", href: "#work" },
  { label: "VAULT", href: "#resources" },
  { label: "JOURNEY", href: "#journey" },
  { label: "TERMINAL", href: "#terminal" },
  { label: "INSTAGRAM", href: "#instagramSection" },
  { label: "CONTACT", href: "#contact" },
];

const bottomNavLinks = [
  { label: "HOME", href: "#top", Icon: Home },
  { label: "WORK", href: "#work", Icon: BriefcaseBusiness },
  { label: "VAULT", href: "#resources", Icon: Library },
  { label: "JOURNEY", href: "#journey", Icon: Route },
  { label: "CONTACT", href: "#contact", Icon: Mail },
];

export function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main navigation">
        <a className="nav-logo" href="#top">
          <Image
            className="nav-logo-image"
            src="/images/profile/nav-logo.png"
            alt="Sonu profile"
            width={34}
            height={34}
          />
          <span>sonu . cs_2004</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
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
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
    <nav className="bottom-nav" aria-label="Quick navigation">
      {bottomNavLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          onClick={() => setActive(label)}
          className={active === label ? "active" : ""}
          aria-current={active === label ? "page" : undefined}
        >
          <Icon aria-hidden="true" strokeWidth={active === label ? 2.5 : 2} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
    </>
  );
}
