import Link from "next/link";
import Seo from "../components/Seo";
import { SITE_NAME, SITE_URL } from "../utils/site";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: ["https://twitter.com/mastergaurang94"],
  };

  return (
    <div className="py-8">
      <Seo
        title="About"
        description="About Gaurang Patel, writer and builder."
        path="/about"
        jsonLd={jsonLd}
      />
      <h2 className="text-4xl py-4 font-bold">About</h2>
      <p className="text-lg leading-relaxed my-4">
        I&apos;m Gaurang Patel. I build products at the intersection of crypto,
        culture, and human behavior.
      </p>
      <p className="text-lg leading-relaxed my-4">
        I&apos;m open to roles where I can ship real products, learn fast, and
        work with people who care about craft.
      </p>
      <p className="text-lg leading-relaxed my-4">
        If you want to support my writing or work, you can send a tip to any of
        these addresses:
      </p>
      <p className="text-lg leading-relaxed my-4">
        <code>bc1q4x87pmelz75c3g62p6ntvaevu4qgefxyngwl83</code>
        <br></br>
        <code>0x65744fFD6cF921F1989f7F7D2cffCaB9Fe2fC085</code>
        <br></br>
        <code>4UTmXN414x37xpEQV7AKX1McbdF6m3wq8cSEcA6ja55L</code>
      </p>
      <p className="text-lg leading-relaxed my-4">
        My Twitter handle is
        <Link
          className="pl-1 text-blue-500 LinkText"
          href="https://twitter.com/mastergaurang94"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mastergaurang94
        </Link>
        .
      </p>
      <p className="text-lg leading-relaxed">Have a wonderful day!</p>
    </div>
  );
}
