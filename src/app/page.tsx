import Image from "next/image";
import Link from "next/link";
import {
  site,
  projects,
  experience,
  education,
  earlierExperience,
  capabilities,
  workPaths,
  affiliations,
} from "@/content/site";
import { FlowField } from "@/components/flow-field";
import { Arrow, Star } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { papers } from "@/content/papers";
import { PaperCard } from "@/components/paper-card";

export default function Home() {
  return (
    <main id="main">
      <section className="hero hero-personal wrap" aria-labelledby="hero-title">
        <div className="hero-eyebrow eyebrow">
          <span>PHYSICS · AI · ENGINEERING</span>
          <span className="hero-coordinate">51.5072° N / 0.1276° W</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1 id="hero-title">
              Jeremy
              <br />
              <em>Kull Jaeggli</em>
            </h1>
            <p className="hero-role">{site.role}</p>
            <div className="hero-intro">
              <span className="intro-marker" aria-hidden="true">
                ↳
              </span>
              <div>
                <p>{site.introduction}</p>
                <p className="hero-direction">{site.direction}</p>
                <div className="hero-actions">
                  <Link href="#work" className="button-primary">
                    Explore my work <Arrow />
                  </Link>
                  <Link href="#contact" className="text-link">
                    Get in touch <Arrow diagonal />
                  </Link>
                </div>

              </div>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-topline eyebrow">
              <span>A LITTLE THEORY.</span>
              <span>A LOT OF CURIOSITY.</span>
            </div>
            <div className="portrait-frame">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={site.portrait.width}
                height={site.portrait.height}
                sizes="(max-width: 600px) 65vw, (max-width: 900px) 32vw, 390px"
                loading="eager"
                fetchPriority="high"
              />
              <span className="portrait-cross" aria-hidden="true">
                +
              </span>
            </div>
            <div className="portrait-caption">
              <span>Jeremy Kull Jaeggli</span>
              <span className="eyebrow">FIG. 01 / THE HUMAN</span>
            </div>
          </div>
        </div>
        <FlowField />
        <div className="hero-bottom">
          <span>
            <span className="status-dot" /> London, UK
          </span>
          <span>
            MSc at Imperial <span className="muted">/</span> Class of 2027
          </span>
          <Link href="#work" className="eyebrow">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      <section className="affiliations wrap" aria-labelledby="affiliations-title">
        <h2 id="affiliations-title" className="eyebrow">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="affiliation-grid">
          {affiliations.map((item) => (
            <a href={item.href} className={`affiliation affiliation-${item.key}`} key={item.key}>
              <div className="affiliation-logo">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <span>{item.detail}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="work" className="work dark-section">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">01 / SELECTED WORK</span>
            <span className="eyebrow section-note">
              FOUR WAYS OF THINKING THROUGH A SYSTEM
            </span>
          </div>
          <div className="work-heading">
            <h2>
              Theory meets
              <br />
              <span className="serif">the real world.</span>
            </h2>
            <p>
              Physics gave me the tools to model a system. Building software
              taught me to make that understanding useful. Here’s where the two
              meet.
            </p>
          </div>
          <nav
            className="work-paths"
            aria-label="Explore work by engineering strength"
          >
            {workPaths.map((path) => (
              <Link key={path.label} href={path.href}>
                <span className="eyebrow">{path.label}</span>
                <span>
                  {path.evidence}
                  <Arrow diagonal />
                </span>
              </Link>
            ))}
          </nav>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <Link
                href={`/work/${project.slug}`}
                className={`project-card project-${i + 1}`}
                key={project.slug}
              >
                <div className="project-art">
                  {project.image ? (
                    <div className="project-photo">
                      <span className="eyebrow">
                        CHESS / THE PEOPLE BEHIND THE SYSTEMS
                      </span>
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        sizes="(max-width: 600px) 100vw, 50vw"
                      />
                      <span className="photo-credit">
                        {project.image.caption}
                      </span>
                    </div>
                  ) : (
                    <ProjectVisual kind={project.visual} />
                  )}
                  <span className="project-open" aria-hidden="true">
                    <Arrow diagonal />
                  </span>
                </div>
                <div className="project-text">
                  <div className="project-meta eyebrow">
                    <span>
                      {project.number} / {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.shortTitle}</h3>
                  <p>
                    {project.summary}
                    {project.disclosure && (
                      <sup aria-label="See NDA note">*</sup>
                    )}
                  </p>
                  <div className="project-tags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    <span>{project.organization}</span>
                    <span className="read-study">
                      Read case study <Arrow diagonal />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="work-footnote">
            <span aria-hidden="true">↳</span> Diagrams are original,
            illustrative visuals. Commercial code and data remain private. *{" "}
            {projects[0].disclosure}
          </p>
          <section id="papers" className="papers" aria-labelledby="papers-title">
            <div className="papers-heading">
              <div>
                <span className="eyebrow">FROM THE LAB TO THE PAGE</span>
                <h2 id="papers-title">Papers & <span className="serif">reports.</span></h2>
              </div>
              <p>Experimental and computational physics, from laboratory measurements to numerical models.</p>
            </div>
            <div className="papers-list">
              {papers.filter((paper) => paper.collection === "laboratory").map((paper) => (
                <PaperCard key={paper.slug} paper={paper} />
              ))}
            </div>
            <div className="papers-collection-heading" lang="en">
              <div>
                <p className="eyebrow" lang="en">EPFL · NUMERICAL PHYSICS · 2025</p>
                <h3 lang="en">From mechanics to quantum physics.</h3>
                <p>Six coursework reports exploring models, methods and simulations. PDFs available in French.</p>
              </div>
              <span className="papers-count">{papers.filter((paper) => paper.collection === "numerical").length} reports</span>
            </div>
            <div className="papers-grid">
              {papers.filter((paper) => paper.collection === "numerical").map((paper) => (
                <PaperCard key={paper.slug} paper={paper} compact />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="experience" className="experience wrap">
        <div className="section-heading">
          <span className="eyebrow">02 / EXPERIENCE & EDUCATION</span>
          <span className="eyebrow section-note">
            A FOUNDATION. AN EVOLVING DIRECTION.
          </span>
        </div>
        <div className="experience-layout">
          <div className="experience-intro">
            <h2>
              Built on physics.
              <br />
              <span className="serif">Moving forward.</span>
            </h2>
            <p>
              A path through scientific thinking, hands-on software and the
              systems that connect them.
            </p>
            <Star />
            <div className="current-note">
              <span className="eyebrow">CURRENT CHAPTER</span>
              <p>
                Advanced Aeronautical Engineering
                <br />
                <strong>Imperial College London</strong>
              </p>
              <span className="current-badge">MSc in progress · 2026–2027</span>
            </div>
          </div>
          <div className="timeline">
            <h3 className="eyebrow timeline-label">PROFESSIONAL EXPERIENCE</h3>
            {experience.map((item) => (
              <article className="timeline-item" key={item.organization}>
                <span className="eyebrow timeline-date">{item.dates}</span>
                <h4>{item.organization}</h4>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-detail">{item.detail}</p>
              </article>
            ))}
            <details className="earlier">
              <summary>
                Earlier experience <span aria-hidden="true">+</span>
              </summary>
              <div>
                {earlierExperience.map((item) => (
                  <article className="timeline-item" key={item.role}>
                    <span className="eyebrow timeline-date">{item.dates}</span>
                    <h4>{item.organization}</h4>
                    <p className="timeline-role">{item.role}</p>
                    <p className="timeline-detail">{item.detail}</p>
                  </article>
                ))}
              </div>
            </details>
            <h3 className="eyebrow timeline-label education-label">
              EDUCATION
            </h3>
            {education.map((item) => (
              <article className="timeline-item" key={item.organization}>
                <span className="eyebrow timeline-date">
                  {item.dates}
                  {item.current && <span className="mini-dot" />}
                </span>
                <h4>{item.organization}</h4>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="capabilities">
          {capabilities.map((item) => (
            <div key={item.label}>
              <span className="eyebrow">{item.label}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">03 / BEYOND THE CODE</span>
            <span className="eyebrow section-note">
              MEXICO → SWITZERLAND → LONDON
            </span>
          </div>
          <div className="about-grid">
            <figure className="about-image about-personal-photo">
              <Image
                src={site.personalPhoto.src}
                alt={site.personalPhoto.alt}
                width={site.personalPhoto.width}
                height={site.personalPhoto.height}
                sizes="(max-width: 700px) 80vw, 400px"
              />
              <figcaption className="eyebrow">{site.personalPhoto.caption}</figcaption>
            </figure>
            <div className="about-copy">
              <h2>
                A scientific mind.
                <br />
                <span className="serif">A wider world.</span>
              </h2>
              <p className="about-lead">
                Physics, building things, playing music. Different ways of
                paying close attention.
              </p>
              <p>{site.background}</p>
              <p>
                Music has been a constant alongside science: around 17 years of
                advanced piano and more than 50 concerts in Mexico and China,
                including ensemble and orchestral performances. There’s
                something familiar in both disciplines — careful listening,
                patient practice and attention to structure.
              </p>
              <p>
                That same curiosity takes me from a piano score to a spacecraft
                simulation. I enjoy work that asks me to move between the
                mathematics, the code and the people building the system.
                Outside that: tennis, aviation and the complexity of fluid
                motion.
              </p>
              <div className="about-details">
                <div>
                  <h3 className="eyebrow">IN THE COMMUNITY</h3>
                  <p>
                    As treasurer of EPFL’s Physics Student Association
                    (2024–2026), I managed an annual budget of roughly CHF
                    20,000 and helped organise Nobel Prize talks attended by
                    more than 300 people.
                  </p>
                </div>
                <div>
                  <h3 className="eyebrow">IN CONVERSATION</h3>
                  <p>
                    Spanish & French <span>Native</span>
                    <br />
                    English <span>Fluent</span>
                    <br />
                    German <span>B1</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="interests">
            <span className="eyebrow">
              ON MY READING DESK
              <br />
              <span>CURRENT INTERESTS & STUDY</span>
            </span>
            <p>
              {site.interests.map((interest, i) => (
                <span key={interest}>
                  {i > 0 && (
                    <span className="interest-separator" aria-hidden="true">
                      {" "}
                      /{" "}
                    </span>
                  )}
                  {interest}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
