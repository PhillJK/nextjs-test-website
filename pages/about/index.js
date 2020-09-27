import React from "react";
import Router from "next/router";
import Head from "next/head";

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About</title>
      </Head>
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back home</button>
      <button onClick={() => Router.push("/posts")}>Go to Posts page</button>
    </React.Fragment>
  );
};

export default About;
