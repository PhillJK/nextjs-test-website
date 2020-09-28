import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";

const Post = ({ post: serverPost }) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();

      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Post">
      <h1>Post {router.query.id}</h1>
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>
      <hr />
      <button onClick={() => Router.push("/posts")}>
        Go back to Posts page
      </button>
    </MainLayout>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post
  };
};

export default Post;
