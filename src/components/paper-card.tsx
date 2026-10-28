import Image from "next/image";
import { Arrow } from "@/components/icons";
import type { Paper } from "@/content/papers";

export function PaperCard({ paper, compact = false }: { paper: Paper; compact?: boolean }) {
  const french = paper.locale === "fr";
  const newTab = french ? "PDF, nouvel onglet" : "PDF, opens in a new tab";
  return (
    <article
      className={`paper-card${compact ? " paper-card-compact" : ""}`}
      lang={paper.locale}
      aria-labelledby={`paper-${paper.slug}`}
    >
      <a className="paper-preview" lang="en" href={paper.pdf} target="_blank" rel="noopener noreferrer"
        aria-label={`Read ${paper.title} (PDF, opens in a new tab)`}>
        <Image src={paper.cover.src} alt={`First page of ${paper.title}`}
          width={paper.cover.width} height={paper.cover.height}
          sizes={compact ? "80px" : "(max-width: 600px) 190px, 240px"} />
      </a>
      <div className="paper-copy">
        <p className="eyebrow paper-meta">{paper.institution} · {paper.type} · <time dateTime={paper.date}>{paper.dateLabel}</time></p>
        <h3 lang="en" id={`paper-${paper.slug}`}>{paper.title}</h3>
        <p className="paper-authors">{paper.authors.join(" · ")}</p>
        <p className="paper-summary">{paper.summary}</p>
        <p className="paper-scope">{paper.scope}</p>
        <ul className="paper-methods" aria-label={french ? "Méthodes" : "Methods"}>
          {paper.methods.map((method) => <li key={method}>{method}</li>)}
        </ul>
        <div className="paper-actions">
          <a className="button-primary" href={paper.pdf} target="_blank" rel="noopener noreferrer">
            {french ? "Lire le rapport" : "Read paper"} <Arrow diagonal /><span className="sr-only"> ({newTab})</span>
          </a>
          <a className="paper-download" href={paper.pdf} download>
            {french ? "Télécharger le PDF" : "Download PDF"} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="paper-file">{paper.pages} pages · {paper.language} · PDF · {paper.fileSize}</p>
      </div>
    </article>
  );
}
