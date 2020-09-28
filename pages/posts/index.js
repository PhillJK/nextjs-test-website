import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

const PostPage = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();

      setPosts(data);
    }

    if (!serverPosts) {
      load();
    }
  });

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Posts">
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={"/posts/[id]"} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

PostPage.getInitialProps = async ({ req }) => {
  if (!req) {
    return null;
  }

  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts
  };
};

export default PostPage;
