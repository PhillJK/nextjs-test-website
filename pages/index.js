import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout title="Hello Next.js">
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
    </MainLayout>
  );
};

export default Index;
