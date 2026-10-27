import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found wrap">
      <span className="eyebrow">404 / OUTSIDE THE FRAME</span>
      <h1>This page isn’t here.</h1>
      <p>Let’s get back to something that is.</p>
      <Link className="button-primary" href="/">
        Return to the portfolio ↗
      </Link>
    </main>
  );
}
