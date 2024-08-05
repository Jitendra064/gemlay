/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductOne from "./components/ProductOne";
import RingPage from "./components/Ringpage";
import Option from "./components/Option";

const App = () => {
  return (
    <div>
      {/* Navbar components  */}
      <Navbar />

      {/* header section  */}

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
