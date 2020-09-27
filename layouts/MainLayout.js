import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Next App" }) {
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
        <title>{title} | Next.js Course</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background-color: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: white;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
