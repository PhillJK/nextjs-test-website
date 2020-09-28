import React from "react";
import Router from "next/router";
import MainLayout from "../../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout title="about">
      <React.Fragment>
        <h1>About page</h1>
        <button onClick={() => Router.push("/")}>Back to Home</button>
        <button onClick={() => Router.push("/posts")}>Go to Post Page</button>
      </React.Fragment>
    </MainLayout>
  );
};

export default About;
