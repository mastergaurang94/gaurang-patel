import Link from "next/link";
import Seo from "../components/Seo";
import { SITE_NAME, SITE_URL } from "../utils/site";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [
      "https://twitter.com/mastergaurang94",
      "https://www.linkedin.com/in/gaurangpatel3",
      "https://github.com/mastergaurang94",
    ],
  };

  return (
    <div className="py-8">
      <Seo
        title="About"
        description="About Gaurang Patel — backend engineer, ex-Tinder, building AI infrastructure and conversational AI."
        path="/about"
        jsonLd={jsonLd}
      />
      <h2 className="text-4xl py-4 font-bold">About</h2>
      <p className="text-lg leading-relaxed my-4">
        I&apos;m Gaurang Patel. Backend engineer with strong product instincts.
      </p>
      <p className="text-lg leading-relaxed my-4">
        I spent 4+ years at{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://www.gotinder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tinder
        </Link>{" "}
        as an early engineering hire, scaling distributed systems through
        hypergrowth &mdash; co-engineering SMS authentication that doubled the
        user base, building the push notification microservice from scratch, and
        shipping features internationally.
      </p>
      <p className="text-lg leading-relaxed my-4">
        Now I&apos;m building across the AI stack. I recently shipped{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://github.com/mastergaurang94/agent-sentinel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agent Sentinel
        </Link>
        , an open-source LLM governance proxy in Go, and I&apos;m building{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://github.com/mastergaurang94/lumen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lumen
        </Link>
        , a privacy-first AI coaching companion with client-side encryption and
        multi-session context management.
      </p>
      <p className="text-lg leading-relaxed my-4">
        You can find me on{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://www.linkedin.com/in/gaurangpatel3"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        ,{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://github.com/mastergaurang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        , and{" "}
        <Link
          className="text-blue-500 LinkText"
          href="https://twitter.com/mastergaurang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        .
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 leading-relaxed my-4">
        If you want to support my writing or work, you can send a tip to any of
        these addresses:
      </p>
      <p className="text-sm text-gray-500 leading-relaxed my-4">
        <code>bc1q4x87pmelz75c3g62p6ntvaevu4qgefxyngwl83</code>
        <br></br>
        <code>0x65744fFD6cF921F1989f7F7D2cffCaB9Fe2fC085</code>
        <br></br>
        <code>4UTmXN414x37xpEQV7AKX1McbdF6m3wq8cSEcA6ja55L</code>
      </p>
    </div>
  );
}
