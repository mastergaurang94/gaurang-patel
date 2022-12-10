type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  }
  content: string;
};

export default Post;