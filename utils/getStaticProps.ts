import fs from 'fs';
import matter from 'gray-matter';
import Post from '../types/Post';

export async function getStaticProps({ params } : { params: { slug: string } }) {
  const files = fs.readdirSync('posts');

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMetadata);

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
      content
    } as Post;
  }) // sort descending by date (newest first) where date is a string in the format "YYYY-MM-DD"
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return {
    props: {
      posts,
      slug: params?.slug?.toString() || '' // not included in index page
    }
  };
}
