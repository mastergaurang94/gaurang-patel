import Link from "next/link";
import md from "markdown-it";

import type Post from "../types/Post";
import Seo from "./Seo";
import { SITE_NAME, SITE_URL } from "../utils/site";

const markdown = md({
  html: true,
  linkify: true,
  typographer: true,
});

// create a component that renders a blog post
function BlogPost({ slug, frontmatter, content }: Post) {
  const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(
    `${SITE_URL}/${slug}`
  )}&text=${encodeURIComponent(
    `Check out this essay by @mastergaurang94!\n\n`
  )}${encodeURIComponent(frontmatter.title)}`;

  const title = frontmatter.metaTitle || frontmatter.title;
  const description =
    frontmatter.metaDesc || "Essays and reflections by Gaurang Patel.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
    },
    mainEntityOfPage: `${SITE_URL}/${slug}`,
    description,
  };

  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={`/${slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <div className={`py-8`}>
        <div key={slug}>
          <Link href={`/${slug}`} className={`text-2xl font-bold LinkText`}>
            {frontmatter.title}
          </Link>
          <div className={`mt-2 italic text-gray-400`}>
            Posted on{" "}
            {
              // convert date from "YYYY-MM-DD" to "December 20, 2022"
              new Date(`${frontmatter.date}T00:00:00Z`).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }
              )
            }
          </div>
          <div className={`text-xl pt-8`}>
            <div
              dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
            />
          </div>
        </div>
      </div>

      <div className="text-lg pb-8">
        If you found value in this post,
        <Link href="/about" className={`pl-1 text-blue-500 LinkText`}>
          consider sending a tip here
        </Link>
        . <br></br>
        <br></br>Or
        <Link
          href={twitterShareUrl}
          className={`pl-1 text-blue-500 LinkText`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </Link>{" "}
        it.
      </div>
    </div>
  );
}

export default BlogPost;
