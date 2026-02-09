import { GetServerSideProps } from "next";
import { getAllPosts } from "../utils/getPosts";
import { SITE_URL } from "../utils/site";

const staticPages = ["", "/essays", "/about", "/rss.xml"];

function buildSitemap(posts: ReturnType<typeof getAllPosts>) {
  const urls = [
    ...staticPages.map((path) => `${SITE_URL}${path}`),
    ...posts.map((post) => `${SITE_URL}/${post.slug}`),
  ];

  const body = urls
    .map((url) => `\n  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}\n</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getAllPosts();
  const sitemap = buildSitemap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
