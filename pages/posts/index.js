import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await fetch("https://localhost:4200/posts");
      const json = response.json;
      setPosts(json);
    }
  }, [posts]);
  return (
    <MainLayout title="Posts">
      <h1>Posts Page</h1>
    </MainLayout>
  );
};

export default PostPage;
