/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import RingPage from "./components/Ringpage";
import Option from "./components/Option";
import ProductCard from "./components/ProductCard";

import ProductOne from "./components/ProductOne";
import "./App.css";
import PhoneNavbar from "./components/PhoneNavbar";
import PhoneFooter from "./components/PhoneFooter";

const App = () => {
  return (
    <div className="allComponents">
      {/* Navbar components  */}
      <div className="destopNavbar">
        <Navbar />
      </div>
      <div className="phonenavbar">
        <PhoneNavbar />
      </div>

      {/* header section  */}

      <RingPage />

      {/* product card section  */}

      <ProductCard />

      {/* <ProductOne /> */}

      {/* option section  */}
      <Option />

      {/* FOOTER SECTION  */}

      <div className="destopFooter">
        <Footer />
      </div>
      <div className="phoneFooter">
        <PhoneFooter />
      </div>
    </div>
  );
};

export default App;
