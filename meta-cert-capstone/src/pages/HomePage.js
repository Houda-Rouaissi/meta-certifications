import React from "react";
import "../App.css";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Testimonial from "../components/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="main">
      <Header />
      <Menu />
      <Testimonial />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
