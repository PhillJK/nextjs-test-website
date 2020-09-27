import Head from "next/head";
import Router from "next/router";

const PostPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Post</h1>
      <button onClick={() => Router.push("/")}>Go back home</button>
      <button onClick={() => Router.push("/about")}>Go to About page</button>
    </>
  );
};

export default PostPage;
