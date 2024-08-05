// src/components/RingPage.js
import React, { useState } from "react";
import "./RingPage.css";

const RingPage = () => {
  const [selectedKarat, setSelectedKarat] = useState("18K");
  const [selectedQuality, setSelectedQuality] = useState("IJ-SI");
  const [selectedMetal, setSelectedMetal] = useState("Yellow Gold");

  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("");
  const [ringSize, setRingSize] = useState("");
  const [pincode, setPincode] = useState("");

  let Arr = [
    "https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YA.jpg",
    "https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YB.jpg",
    "https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YC.jpg",
    "https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YD.jpg",
  ];
  console.log(index);

  const handleRingSizeChange = (event) => {
    setRingSize(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const locateMe = () => {
    // Add your logic to locate the user here
    console.log("Locate Me clicked");
  };

  function next() {
    if (index <= 2) {
      setIndex(index + 1);
    } else if (index >= 3) {
      setIndex(0);
    }
  }

  function prev() {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="ring-page ">
      <div className="ring-image">
        <img src={Arr[index]} alt="Chavvi Diamond Ring" className="origin" />
        <div className="symbol_slider">
          {/* <p className="previous round" onClick={prev}>
            &#8249;
          </p> */}

          <img
            width="30"
            height="36"
            src="https://img.icons8.com/fluency/48/000000/previous.png"
            alt="previous"
            onClick={prev}
          />

          <img
            width="30"
            height="36"
            src="https://img.icons8.com/fluency/48/000000/next.png"
            alt="next"
            onClick={next}
          />
        </div>
        <div className="cricle text-center">
          {Arr.map((e, i) => (
            <p key={i} className={i === index ? "bg-dark" : null}></p>
          ))}
        </div>
        <div className="zoom-note">
          PRODUCT SHOWN IN 10X ZOOM FOR YOUR CLARITY
        </div>
      </div>
      <div className="ring-details ">
        <div className="p-4">
          <div className="ring_heading">
            <div>
              <h1>Chavvi Diamond Ring</h1>
              <h2>₹29,290</h2>
            </div>
            <div className="ring_03f">
              <span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/like--v1.png"
                  alt="like--v1"
                />{" "}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/share--v1.png"
                  alt="share--v1"
                />
              </span>
            </div>
          </div>
          <p className="ring_34">MRP (Inclusive all Taxes)</p>

          <div className="row">
            <div className="col-lg-6">
              <hr />
              <div className="option">
                <p>
                  Karat: <span>18k</span>
                </p>
                <div className="buttons button_44">
                  <button
                    onClick={() => setSelectedKarat("14K")}
                    className={selectedKarat === "14K" ? "selected" : ""}
                  >
                    14K
                  </button>
                  <button
                    onClick={() => setSelectedKarat("18K")}
                    className={selectedKarat === "18K" ? "selected" : ""}
                  >
                    18K
                  </button>
                </div>
              </div>

              <div className="options option_55">
                <div className="option option_44">
                  <p>
                    Diamond Origin: <span>Natural</span>
                  </p>
                  <button className="selected">Natural</button>
                </div>
                <div className="option option_55">
                  <p>
                    Diamond Quality: <span>IJ-SI</span>
                  </p>
                  <div className="buttons button_55">
                    <button
                      onClick={() => setSelectedQuality("IJ-SI")}
                      className={selectedQuality === "IJ-SI" ? "selected" : ""}
                    >
                      IJ-SI
                    </button>
                    <button
                      onClick={() => setSelectedQuality("GH-VS/SI")}
                      className={
                        selectedQuality === "GH-VS/SI" ? "selected" : ""
                      }
                    >
                      GH-VS/SI
                    </button>
                    <button
                      onClick={() => setSelectedQuality("GH-VVS")}
                      className={selectedQuality === "GH-VVS" ? "selected" : ""}
                    >
                      GH-VVS
                    </button>
                    <button
                      onClick={() => setSelectedQuality("EF-VVS")}
                      className={selectedQuality === "EF-VVS" ? "selected" : ""}
                    >
                      EF-VVS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="option">
                <p>
                  Metal: <span>Yellow Gold</span>
                </p>
                <div className=" buttons button_45">
                  <button
                    onClick={() => setSelectedMetal("Yellow Gold")}
                    className={
                      selectedMetal === "Yellow Gold" ? "selected" : ""
                    }
                  ></button>
                  <button
                    onClick={() => setSelectedMetal("Rose Gold")}
                    className={selectedMetal === "Rose Gold" ? "selected" : ""}
                  ></button>
                  <button
                    onClick={() => setSelectedMetal("White Gold")}
                    className={selectedMetal === "White Gold" ? "selected" : ""}
                  ></button>
                </div>
              </div>

              {/* size option  */}

              <div className="tim">
                <div className="ring-size">
                  <label>Size :</label>
                  <select value={ringSize} onChange={handleRingSizeChange}>
                    {[...Array(13)].map((_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <div className="ring-size-help">
                    Not Sure about Ring Size?
                  </div>
                </div>

                <div className="delivery-store">
                  <label>Delivery & Store Details</label>
                  <input
                    type="text"
                    className="input_11"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={handlePincodeChange}
                  />
                  <button onClick={locateMe} className="btn90">
                    Locate Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Two_btn">
          <div className="button-container">
            <div>
              <a href="#" className="button_34">
                ADD TO WISHLIST
              </a>
            </div>
            <div>
              <a href="#" className="button_35">
                Checking Avilablity
                <span
                  className="spinner-border spinner-border-sm mx-1"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingPage;
