type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    metaTitle?: string;
    metaDesc?: string;
    tags?: string[];
  };
  content: string;
};

export default Post;
