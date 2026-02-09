import Link from "next/link";
import type Post from "../types/Post";
import { getAllPosts } from "../utils/getPosts";
import Seo from "../components/Seo";
import { SITE_NAME, SITE_URL } from "../utils/site";

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  const latestPost = posts[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Gaurang Patel — backend engineer building AI infrastructure and conversational AI products.",
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };

  return (
    <div className="py-8">
      <Seo
        title="Home"
        description="Gaurang Patel — backend engineer building AI infrastructure and conversational AI products."
        path="/"
        jsonLd={jsonLd}
      />

      <h1 className="text-4xl py-4 font-bold">Gaurang Patel</h1>
      <p className="text-lg leading-relaxed my-4">
        Backend engineer with strong product instincts. I spent 4+ years at
        Tinder as an early hire scaling distributed systems through hypergrowth.
        Now I&apos;m building across the AI stack &mdash; most recently{" "}
        <Link href="https://github.com/mastergaurang94/agent-sentinel" className="text-blue-500 LinkText" target="_blank" rel="noopener noreferrer">
          Agent Sentinel
        </Link>
        , an LLM governance proxy, and{" "}
        <Link href="https://github.com/mastergaurang94/lumen" className="text-blue-500 LinkText" target="_blank" rel="noopener noreferrer">
          Lumen
        </Link>
        , a privacy-first AI coaching companion.
      </p>
      <p className="text-lg leading-relaxed my-4">
        I write here occasionally. Start with the latest essay or browse the
        archive.
      </p>

      {latestPost ? (
        <div className="mt-8">
          <div className="text-sm uppercase tracking-wide text-gray-500">
            Latest essay
          </div>
          <Link
            href={`/${latestPost.slug}`}
            className="text-2xl font-semibold LinkText"
          >
            {latestPost.frontmatter.title}
          </Link>
          <div className="mt-2 text-gray-500">
            {new Date(`${latestPost.frontmatter.date}T00:00:00Z`).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              }
            )}
          </div>
        </div>
      ) : null}

      <div className="mt-10">
        <div className="text-lg font-bold mb-4">Essay archive</div>
        {posts.map((post) => (
          <div key={post.slug} className="text-lg">
            <Link href={`/${post.slug}`} className="text-blue-500 LinkText">
              {post.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
