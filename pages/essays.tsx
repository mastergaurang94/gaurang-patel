import type Post from "../types/Post";
import { PostLayout } from "../components/PostLayout";
import { getStaticProps } from "../utils/getStaticProps";

const Essays = ({ posts }: { posts: Post[] }) => {
  return <PostLayout posts={posts} slug={"/essays"} />;
};

export default Essays;
export { getStaticProps };
