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
      "Essays and notes on technology, crypto, and building in public.",
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };

  return (
    <div className="py-8">
      <Seo
        title="Home"
        description="Essays and notes on technology, crypto, and building in public."
        path="/"
        jsonLd={jsonLd}
      />

      <h1 className="text-4xl py-4 font-bold">Writing, thoughts, and work</h1>
      <p className="text-lg leading-relaxed my-4">
        I&apos;m Gaurang Patel. I write about technology, crypto, and the
        lessons I&apos;m learning while building. I&apos;m also open to roles
        where I can ship real products and grow with a great team.
      </p>
      <p className="text-lg leading-relaxed my-4">
        If you&apos;re looking for a quick entry point, start with the latest
        essay or browse the archive.
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
