import React from "react";
import Router from "next/router";
import MainLayout from "../../layouts/MainLayout";

const About = ({ title }) => {
  return (
    <MainLayout title="about">
      <React.Fragment>
        <h1>{title}</h1>
        <p>
          This website was created sole-purposely to learn Next.js. Nothing
          interesting or mind-blowing you can find here. Please, move on and
          surf more interesting stuff on the internet
        </p>
        <button onClick={() => Router.push("/")}>Back to Home</button>
        <button onClick={() => Router.push("/posts")}>Go to Post Page</button>
      </React.Fragment>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();

  return {
    title: data.title
  };
};

export default About;
