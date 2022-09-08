import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Slide from "./containers/slide/Slide";
import Whyauto from "./containers/jainauto/Whyauto";
import Possibility from "./containers/yakuza/Possibility";
import CTA from "./components/dealership/CTA";
import Brands from "./containers/Brands/Brands";
import Footer from "./containers/footer/Footer";
import Slot from "./containers/footer/Slot";
const Home = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient_bg">
          <Navbar />
          <Header />
        </div>
        <Slide />
        <Whyauto />
        <Possibility />
        <CTA />
        <Brands />
        < Slot/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
