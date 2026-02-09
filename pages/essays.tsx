import type Post from "../types/Post";
import { PostLayout } from "../components/PostLayout";
import { getStaticProps } from "../utils/getStaticProps";
import Seo from "../components/Seo";

const Essays = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Seo
        title="Essays"
        description="Long-form essays and reflections by Gaurang Patel."
        path="/essays"
      />
      <PostLayout posts={posts} slug="/essays" />
    </>
  );
};

export default Essays;
export { getStaticProps };
