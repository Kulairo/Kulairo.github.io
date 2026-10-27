"use client";
import { useState } from "react";
import { site } from "@/content/site";
import { Arrow, Star } from "./icons";
export function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setMessage("Email address copied.");
      window.setTimeout(() => {
        setCopied(false);
        setMessage("");
      }, 4000);
    } catch {
      setMessage(
        "Copy is unavailable. Select the email address below or use the email link.",
      );
    }
  }
  return (
    <section
      id="contact"
      aria-label="Contact Jeremy"
      className="contact dark-section"
    >
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow">04 / START A CONVERSATION</span>
          <Star />
        </div>
        <div className="contact-grid">
          <h2>
            Have an interesting
            <br />
            problem?
            <br />
            <span className="serif">Let’s talk.</span>
          </h2>
          <div className="contact-aside">
            <span className="availability">
              <span /> LOOKING AHEAD TO 2027
            </span>
            <p>
              I’m interested in London-based AI/ML and scientific-computing
              opportunities around the completion of my MSc, and open to
              suitable research collaborations.
            </p>
            <a className="contact-link" href={`mailto:${site.email}`}>
              Send me an email <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="email-row">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <button type="button" onClick={copyEmail}>
            {copied ? "Copied ✓" : "Copy email"}
            <span aria-hidden="true">{copied ? "" : " ⧉"}</span>
          </button>
          <span className="copy-status" role="status">
            {message}
          </span>
        </div>
        {site.links.length > 0 && (
          <div className="social-links">
            {site.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Jeremy Kull Jaeggli</span>
          <span>PHYSICS · AI · ENGINEERING</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
