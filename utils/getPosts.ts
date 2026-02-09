import fs from "fs";
import matter from "gray-matter";
import Post from "../types/Post";

const POSTS_DIR = "posts";

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR);

  return files
    .map((filename) => {
      const markdownWithMetadata = fs.readFileSync(
        `${POSTS_DIR}/${filename}`,
        "utf-8"
      );
      const { data: frontmatter, content } = matter(markdownWithMetadata);

      return {
        slug: filename.replace(".md", ""),
        frontmatter,
        content,
      } as Post;
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
