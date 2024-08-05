/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import RingPage from "./components/Ringpage";
import Option from "./components/Option";
import ProductCard from "./components/ProductCard";

import ProductOne from "./components/ProductOne";
import RingPage from "./components/Ringpage";
import Option from "./components/Option";

const App = () => {
  return (
    <div>
      {/* Navbar components  */}
      <Navbar />

      {/* header section  */}

      <RingPage />

      {/* product card section  */}

      <ProductCard />

      {/* <ProductOne /> */}
      <RingPage />

      {/* option section  */}
      <Option />

      {/* FOOTER SECTION  */}
      <Footer />
    </div>
  );
};

export default App;
