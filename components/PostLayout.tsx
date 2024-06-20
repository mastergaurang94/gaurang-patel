import Link from "next/link";
import Post from "../types/Post";
import BlogPost from "./BlogPost";

export const PostLayout = ({ posts, slug }: { posts: Post[]; slug: string; }) => {
  // determine if slug is valid
  const validSlug = posts.find(p => p.slug === slug);
  const currentPost = validSlug ? validSlug : posts[0];

  return (
    <div>
      <BlogPost
        key={currentPost.slug}
        slug={currentPost.slug}
        frontmatter={currentPost.frontmatter}
        content={currentPost.content}
      />

      <div className="w-full h-0.5 bg-gray-300 my-2"></div>

      <div className={`py-12`}>
        <div className="mb-6 text-lg font-bold">Recent Posts</div>
        {posts.map((post: Post) => (
          <div key={post.slug} className={`text-lg`}>
            <Link href={`${post.slug}`} className={`text-blue-500 LinkText`}>
              {post.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
