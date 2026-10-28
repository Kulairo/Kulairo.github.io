import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { site } from "@/content/site";
import { getSiteUrl } from "@/content/config";
import "./globals.css";
const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/ibm-plex-mono.woff2",
  variable: "--font-mono",
  weight: "400",
  display: "swap",
  preload: false,
});
const serif = localFont({
  src: "./fonts/instrument-serif-italic.woff2",
  variable: "--font-serif",
  weight: "400",
  style: "italic",
  display: "swap",
});
const origin = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: new URL(origin ?? "http://localhost:3000"),
  title: { default: site.title, template: "%s — Jeremy Kull Jaeggli" },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: origin ? { canonical: origin } : undefined,
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "en_GB",
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jeremy Kull Jaeggli — Machine learning and scientific computing",
      },
    ],
    ...(origin ? { url: origin } : {}),
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: site.title,
    description: site.description,
  },
  robots: origin
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    email: site.email,
    ...(origin ? { url: origin, image: `${origin}${site.portrait.src}` } : {}),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "EPFL",
    },
    homeLocation: { "@type": "Place", name: "London, UK" },
    knowsLanguage: ["Spanish", "French", "English", "German"],
  };
  return (
    <html
      lang="en-GB"
      className={`${geist.variable} ${mono.variable} ${serif.variable}`}
    >
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <noscript>
          <style>{`@media(max-width:600px){.site-header{height:auto}.header-inner{flex-wrap:wrap;padding-top:20px}.menu-toggle{display:none}.navigation{display:flex;position:static;flex-direction:row;width:100%;padding:12px 0;box-shadow:none;border:0;gap:20px}.navigation a{font-size:12px;border:0;padding:8px 0}.navigation a span{display:none}}.email-row button,.flow-toggle{display:none}`}</style>
        </noscript>
        {children}
        <Contact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
