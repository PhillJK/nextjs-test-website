import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";

const Post = () => {
  const router = useRouter();
  return (
    <MainLayout title="Post">
      <h1>Post {router.query.id}</h1>
    </MainLayout>
  );
};

export default Post;
