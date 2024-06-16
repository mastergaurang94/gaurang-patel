import Link from "next/link";
import md from "markdown-it";

const markdown = md({
  html: true,
  linkify: true,
  typographer: true,
});

import type Post from "../types/Post";

// create a component that renders a blog post
function BlogPost({ slug, frontmatter, content }: Post) {
  return (
    <div>
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
          href="https://twitter.com/share"
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
