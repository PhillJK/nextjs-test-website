import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta
          name="keyword"
          content="learning, study, course, next, nextjs, reactjs, react, react-dom, nodejs, node"
        />
        <meta
          name="description"
          content="This website was created sole-purposely to learn Next.js. Nothing mind-blowing here"
        />
        <meta charSet="utf-8" />
        <title>Hello Next.js</title>
      </Head>
      <h1>Hello next.js</h1>
      <p>
        <Link href="/about">
          <a>About page</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts page</a>
        </Link>
      </p>
    </>
  );
};

export default Index;
