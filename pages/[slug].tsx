import fs from "fs";
import type Post from "../types/Post";

import { PostLayout } from "../components/PostLayout";
import { getStaticProps } from "../utils/getStaticProps";

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export { getStaticProps };

const PostPage = ({ posts, slug }: { posts: Post[], slug: string }) => {
  return (
    <PostLayout posts={posts} slug={slug} />
  );
};

export default PostPage;
