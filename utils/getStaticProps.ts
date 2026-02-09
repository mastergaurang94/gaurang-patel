import { getAllPosts } from "./getPosts";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();

  return {
    props: {
      posts,
      slug: params?.slug?.toString() || "", // not included in index page
    },
  };
}
