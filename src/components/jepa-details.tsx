import { jepa } from "@/content/jepa";
import { ProjectVisual } from "./project-visual";

export function JepaDetails() {
  return (
    <>
      <section id="architecture" className="jepa-section">
        <span className="eyebrow">TECHNICAL NOTE / THE ARCHITECTURE</span>
        <h2>Predict the representation.</h2>
        <p>
          {jepa.introduction}{" "}
          <a
            className="inline-source"
            href={jepa.reference.explanation}
            target="_blank"
            rel="noopener noreferrer"
          >
            JEPA background ↗
          </a>
        </p>
        <figure className="jepa-diagram">
          <div className="diagram-heading">
            <span className="eyebrow">
              JOINT EMBEDDING PREDICTIVE ARCHITECTURE
            </span>
            <span>Conceptual</span>
          </div>
          <div className="jepa-lane">
            <span className="lane-label">CONTEXT → PREDICTION</span>
            <ol className="jepa-nodes">
              {jepa.context.map((node) => (
                <li key={node.title}>
                  <span className="node-symbol">{node.symbol}</span>
                  <strong>{node.title}</strong>
                  <span>{node.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="jepa-lane target-lane">
            <span className="lane-label">TARGET → REPRESENTATION</span>
            <ol className="jepa-nodes">
              {jepa.target.map((node) => (
                <li key={node.title}>
                  <span className="node-symbol">{node.symbol}</span>
                  <strong>{node.title}</strong>
                  <span>{node.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="jepa-objective">
            <span className="eyebrow">COMPARE IN LATENT SPACE</span>
            <span
              className="objective-formula"
              aria-label="Loss equals a distance between the predicted and target representations"
            >
              L = D(ẑ_t, z_t)
            </span>
          </div>
          <figcaption>{jepa.scope}</figcaption>
        </figure>
      </section>
      <section id="representations" className="jepa-section">
        <span className="eyebrow">
          AFTER TRAINING / READING THE LATENT SPACE
        </span>
        <h2>What does an account become?</h2>
        <p>{jepa.representationIntro}</p>
        <div
          className="representation-equation"
          aria-label="Account data is encoded into a learned numerical vector"
        >
          <span>Account data</span>
          <span aria-hidden="true">→</span>
          <span>Encoder</span>
          <span aria-hidden="true">→</span>
          <strong>[z₁, z₂, …, z_d]</strong>
        </div>
        <p>{jepa.investigation}</p>
        <figure className="representation-figure">
          <ProjectVisual kind="embedding" />
          <figcaption>
            Synthetic points illustrating an embedding space. These are not
            trained FINDEP embeddings or reported clusters.
          </figcaption>
        </figure>
        <span className="eyebrow">HOW TO READ A REPRESENTATION</span>
        <div className="representation-guide">
          {jepa.readingGuide.map((item, i) => (
            <article key={item.title}>
              <span className="eyebrow">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
