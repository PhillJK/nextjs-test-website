import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";

const Post = ({ post }) => {
  const router = useRouter();
  return (
    <MainLayout title="Post">
      <h1>Post {router.query.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post
  };
};

export default Post;
