import React from "react";
// import { Article, Brand, CTA } from "./components";
import { Footer, Blog, Possibility, WhatGPT3, Features, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
};

export default App;
