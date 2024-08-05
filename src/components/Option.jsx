import React, { useState } from "react";
import "./Option.css";

const Option = () => {
  const [selectedTab, setSelectedTab] = useState("SGL");

  const renderContent = () => {
    switch (selectedTab) {
      case "BIS":
        return (
          <p>
            Hallmark Unique Identification (HUID) is a revolutionary system
            designed to provide unparalleled authenticity and traceability for
            products. Each item is assigned a unique identifier, encoded with
            encrypted data and embedded within the hallmark. This identifier
            serves as a digital fingerprint, allowing for seamless verification
            of authenticity and origin throughout the supply chain and beyond.
          </p>
        );
      case "IGI":
        return (
          <p>
            IGI (International Gemological Institute): IGI is a renowned
            gemological laboratory that provides expert grading and
            certification services for diamonds, gemstones, and jewelry. With a
            global presence and decades of experience, IGI offers accurate and
            reliable assessments of gemstone quality, helping consumers make
            informed purchasing decisions.
          </p>
        );
      case "SGL":
        return (
          <p>
            SGL (Solitaire Gem Labs): SGL is a trusted gemological laboratory
            specializing in the certification of diamonds and gemstones. With
            state-of-the-art technology and a team of expert gemologists, SGL
            provides comprehensive grading reports that authenticate the quality
            and characteristics of each stone, ensuring transparency and
            confidence in the jewelry market.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs my-3">
        <div className="border_bottom">
          <button onClick={() => setSelectedTab("BIS")}>
            {" "}
            <img
              src="https://www.gemlay.com/BisHallmark.svg"
              alt=""
              className="img_77"
            />
            BIS Hallmark
          </button>
          <button onClick={() => setSelectedTab("IGI")}>
            {" "}
            <img
              src="https://www.gemlay.com/igi.svg"
              alt=""
              className="img_77"
            />
            IGI
          </button>
          <button onClick={() => setSelectedTab("SGL")}>
            {" "}
            <img
              src="https://www.gemlay.com/sgl.svg"
              alt=""
              className="img_77"
            />
            SGL
          </button>
        </div>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Option;
