import { GetServerSideProps } from "next";
import { getAllPosts } from "../utils/getPosts";
import { SITE_URL, SITE_NAME } from "../utils/site";

const FEED_URL = `${SITE_URL}/rss.xml`;

function buildRssItem({
  slug,
  frontmatter,
}: {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    metaDesc?: string;
    tags?: string[];
  };
}) {
  const url = `${SITE_URL}/${slug}`;
  const description = frontmatter.metaDesc || "";
  const categories = (frontmatter.tags || [])
    .map((tag) => `\n      <category>${tag}</category>`)
    .join("");

  return `\n    <item>\n      <title><![CDATA[${frontmatter.title}]]></title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n      <pubDate>${new Date(`${frontmatter.date}T00:00:00Z`).toUTCString()}</pubDate>\n      ${description ? `<description><![CDATA[${description}]]></description>` : ""}\n      <author>gaurangpatel.xyz (${SITE_NAME})</author>${categories}\n    </item>`;
}

function buildRss(posts: ReturnType<typeof getAllPosts>) {
  const items = posts.map((post) => buildRssItem(post)).join("");
  const lastBuildDate = posts[0]
    ? new Date(`${posts[0].frontmatter.date}T00:00:00Z`).toUTCString()
    : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${SITE_NAME}</title>\n    <link>${SITE_URL}</link>\n    <description>Essays and notes by ${SITE_NAME}.</description>\n    <language>en-us</language>\n    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>${items}\n  </channel>\n</rss>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts();
  const rss = buildRss(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return {
    props: {},
  };
};

export default function Rss() {
  return null;
}
