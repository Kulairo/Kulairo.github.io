"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
const navigation = ["Work", "Papers", "Experience", "About", "Contact"];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="monogram">
            J<span>K</span>
          </span>
          <span className="brand-name">
            Jeremy Kull Jaeggli
            <span className="brand-location">London, UK</span>
          </span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {navigation.map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          {site.resume && <a href={site.resume.url}>{site.resume.label}</a>}
        </nav>
      </div>
    </header>
  );
}
