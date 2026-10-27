import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, site } from "@/content/site";
import { getSiteUrl } from "@/content/config";
import { ProjectVisual } from "@/components/project-visual";
import { Arrow } from "@/components/icons";
import { JepaDetails } from "@/components/jepa-details";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  const origin = getSiteUrl();
  return {
    title: project.title,
    description: project.summary,
    alternates: origin
      ? { canonical: `${origin}/work/${project.slug}` }
      : undefined,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: ["/og.png"],
      ...(origin ? { url: `${origin}/work/${project.slug}` } : {}),
    },
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index],
    next = projects[(index + 1) % projects.length];
  const isJepa = project.visual === "embedding";
  return (
    <main id="main" className="case-page">
      <section className="case-hero wrap">
        <Link href="/#work" className="back-link">
          ← All selected work
        </Link>
        <div className="case-eyebrow eyebrow">
          <span>
            {project.number} / {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case-deck">
          {project.summary}
          {project.disclosure && <sup aria-label="See NDA note">*</sup>}
        </p>
        <dl className="case-meta">
          <div>
            <dt>CONTEXT</dt>
            <dd>{project.organization}</dd>
          </div>
          <div>
            <dt>MY ROLE</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>STATUS</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <div className="case-highlights">
          {project.highlights.map((item) => (
            <div key={item.label}>
              <span className="eyebrow">{item.label}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      {project.disclosure && (
        <p className="nda-note wrap">* {project.disclosure}</p>
      )}
      <figure className="case-figure wrap">
        {project.image ? (
          <Image
            className="case-team-photo"
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 1440px) 95vw, 1296px"
            loading="eager"
          />
        ) : (
          <ProjectVisual kind={project.visual} />
        )}
        <figcaption>
          <span className="eyebrow">FIG. {project.number}</span>
          {project.image ? project.image.caption : project.visualCaption}
        </figcaption>
      </figure>
      <div className="case-body wrap">
        <aside className="case-sidebar">
          <span className="eyebrow">INSIDE THIS PROJECT</span>
          <nav aria-label="Case study sections">
            <a href="#question">The question</a>
            <a href="#contribution">My contribution</a>
            <a href="#approach">The approach</a>
            {isJepa && (
              <>
                <a href="#architecture">Architecture explained</a>
                <a href="#representations">Learned representations</a>
              </>
            )}
            <a href="#outcome">Outcome & scope</a>
          </nav>
          <div className="case-tools">
            <span className="eyebrow">METHODS & TOOLS</span>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <a
            className="case-contact"
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Let’s discuss: ${project.title}`)}`}
          >
            Discuss this work <Arrow diagonal />
          </a>
        </aside>
        <div className="case-content">
          <section id="question">
            <span className="eyebrow">01 / THE QUESTION</span>
            <h2>{project.question}</h2>
            <p>{project.introduction}</p>
          </section>
          <section id="contribution">
            <span className="eyebrow">02 / MY CONTRIBUTION</span>
            <h2>What I worked on.</h2>
            <ul className="contribution-list">
              {project.contributions.map((text, i) => (
                <li key={text}>
                  <span className="eyebrow">0{i + 1}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>
          <section id="approach">
            <span className="eyebrow">03 / THE APPROACH</span>
            <h2>From question to system.</h2>
            <div className="method-list">
              {project.methods.map((method, i) => (
                <article key={method.title}>
                  <span className="method-number">0{i + 1}</span>
                  <div>
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {isJepa && <JepaDetails />}
          {project.image && (
            <figure className="mission-figure">
              <ProjectVisual kind={project.visual} />
              <figcaption>{project.visualCaption}</figcaption>
            </figure>
          )}
          <section id="outcome">
            <span className="eyebrow">04 / OUTCOME & SCOPE</span>
            <h2>What this work represents.</h2>
            <p>{project.outcome}</p>
            <aside className="scope-note">
              <span className="eyebrow">PUBLICATION NOTE</span>
              <p>{project.boundary}</p>
            </aside>
            <blockquote>{project.reflection}</blockquote>
          </section>
        </div>
      </div>
      <section className="next-project wrap">
        <div>
          <span className="eyebrow">KEEP EXPLORING / {next.number}</span>
          <Link href={`/work/${next.slug}`}>
            <h2>{next.shortTitle}</h2>
            <Arrow diagonal />
          </Link>
        </div>
        <ProjectVisual kind={next.visual} />
      </section>
    </main>
  );
}
