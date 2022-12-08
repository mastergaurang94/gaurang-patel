import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  }
};

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMetadata);

    // return the post object
    return {
      slug: filename.replace('.md', ''),
      frontmatter
    } as Post;
  });

  return {
    props: {
      posts
    }
  };
}

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <div>
      <div className={`py-12`}>
        {posts.slice(0,1).map(({ slug, frontmatter }) => (
          <div key={slug}>
            <Link href={`/${slug}`} className={`text-2xl font-bold LinkText`}>
              {frontmatter.title}
            </Link>
            <p className={`mt-2 italic text-gray-400`}>
              Posted on {frontmatter.date}
            </p>
            <p className={`text-xl py-4`}>
              {/* <div dangerouslySetInnerHTML={{ __html: md.render(blogPost.content) }} /> */}
            </p>
          </div>
        ))}
      </div>

      
      <div className="text-lg pb-8">
        If you found value in this essay,
        <Link href="#" className={`pl-1 text-blue-500 LinkText`}>
          consider sending a tip here
        </Link>.
      </div>

      <div className="w-full h-0.5 bg-gray-300 my-2"></div>

      <div className={`py-12`}>
        <h2 className="mb-6 text-lg font-bold">Recent Posts</h2>
        {posts.slice(1).map(({ slug, frontmatter }) => (
          <div className="" key={slug}>
            <h2 className={`text-lg`}>
              <a href={`/${frontmatter.title}`} className={`text-blue-500 hover:text-blue-800`}>
                {frontmatter.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

