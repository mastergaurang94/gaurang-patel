import type Post from "../types/Post";
import { PostLayout } from "../components/PostLayout";
import { getStaticProps } from "../utils/getStaticProps";

const Index = ({ posts }: { posts: Post[] }) => {
  return <PostLayout posts={posts} slug={""} />;
};

export default Index;
export { getStaticProps };
