import React, { useState } from "react";

import "./PhoneFooter.css";

const PhoneFooter = () => {
  const [Data, SetData] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
  });

  let obb = {
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
  };

  function showHandler(e) {
    function xyz(id) {
      let span = "span" + id;
      let valueId = "value" + id;
      if (e.target.id === span) {
        if (!Data[valueId]) {
          obb[valueId] = true;
          return SetData(obb);
        }
      }
    }
    xyz(1);
    xyz(2);
    xyz(3);
    xyz(4);
    xyz(5);

    // first logic code

    // if (e.target.id === "span1") {
    //   if (!Data.value1) {
    //     obb.value1 = true;

    //     return SetData(obb);
    //   }
    // }
    // if (e.target.id === "span2") {
    //   if (!Data.value2) {
    //     obb.value2 = true;
    //     return SetData(obb);
    //   }
    // }
    // if (e.target.id === "span3") {
    //   if (!Data.value3) {
    //     obb.value3 = true;
    //     return SetData(obb);
    //   }
    // }
    // if (e.target.id === "span4") {
    //   if (!Data.value4) {
    //     obb.value4 = true;
    //     return SetData(obb);
    //   }
    // }
    SetData(obb);
  }

  return (
    <div>
      <div className="footer_accordian">
        <p onClick={showHandler} id="span1" className="p01">
          OUR SERVICES{" "}
          <span className="span_footer">
            {Data.value1 ? <>&#x25B4;</> : <>&#9662;</>}
          </span>
        </p>
        <div>
          {Data.value1 && (
            <div className="footer-col">
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/gold-rate.svg"
                  alt=""
                />{" "}
                <span>GOLD RATE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/payment-method.svg"
                  alt=""
                />{" "}
                <span>VARIOUR PAYMENT OPTIONS</span>
              </a>
            </div>
          )}
        </div>

        <p onClick={showHandler} id="span2" className="p01">
          OUR POLICIES{" "}
          <span className="span_footer">
            {Data.value2 ? <>&#x25B4;</> : <>&#9662;</>}
          </span>
        </p>

        <div>
          {Data.value2 && (
            <div className="footer-col">
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/return.svg"
                  alt=""
                />{" "}
                <span>30-DAY RETURENS</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/shipping.svg"
                  alt=""
                />{" "}
                <span>FREE SHIPPING</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/exchange.svg"
                  alt=""
                />{" "}
                <span>LIFETIME EXCHANGE POLICY</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/refund.svg"
                  alt=""
                />{" "}
                <span>RETURN AND REFUND POLICY</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/gspLogo.svg"
                  alt=""
                />{" "}
                <span>GSP TERMS & CONDITIONS</span>
              </a>
            </div>
          )}
        </div>
        <p onClick={showHandler} id="span3" className="p01">
          JEWELLERY KNOWLEDGE
          <span className="span_footer">
            {Data.value3 ? <>&#x25B4;</> : <>&#9662;</>}
          </span>
        </p>
        <div>
          {Data.value3 && (
            <div className="footer-col">
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/gold.svg"
                  alt=""
                />{" "}
                <span>GOLD GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/diamond.svg"
                  alt=""
                />{" "}
                <span>DIAMOND GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/JEWELLERY.svg"
                  alt=""
                />{" "}
                <span>JEWELLERY GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/SOLITIARE-DIAMOND.svg"
                  alt=""
                />{" "}
                <span>SOLITAIRE DIAMOND GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/GEMSTONE.svg"
                  alt=""
                />{" "}
                <span> GEMSTONE GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/CERTIFICATION.svg"
                  alt=""
                />{" "}
                <span>CERTIFICATION GUIDE</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/JEWELLERY1.svg"
                  alt=""
                />{" "}
                <span>JEWELLERY GIFTING</span>
              </a>
            </div>
          )}
        </div>
        <p onClick={showHandler} id="span4" className="p01">
          ABOUT US{" "}
          <span className="span_footer">
            {Data.value4 ? <>&#x25B4;</> : <>&#9662;</>}
          </span>
        </p>
        <div>
          {Data.value4 && (
            <div className="footer-col">
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/vision.svg"
                  alt=""
                />{" "}
                <span>OUR VISION</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/garnet.svg"
                  alt=""
                />{" "}
                <span>WHY GEMLAY</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/story.svg"
                  alt=""
                />{" "}
                <span>OUR STORY</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/team.svg"
                  alt=""
                />{" "}
                <span>OUR TEAM</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/review.svg"
                  alt=""
                />{" "}
                <span>REVIEWS AND RATINGS</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  src="https://www.gemlay.com/assets/footer/press.svg"
                  alt=""
                />{" "}
                <span>PRESS RELEASE</span>
              </a>
            </div>
          )}
        </div>
        <p onClick={showHandler} id="span5" className="p01">
          Get In Touch{" "}
          <span className="span_footer">
            {Data.value5 ? <>&#x25B4;</> : <>&#9662;</>}
          </span>
        </p>
        <div>
          {Data.value5 && (
            <div className="footer-collum">
              <a>
                {" "}
                <img
                  width="29"
                  height="29"
                  src="https://img.icons8.com/material-outlined/24/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />{" "}
                <span>99888-98866</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ios/50/secured-letter--v1.png"
                  alt="secured-letter--v1"
                />{" "}
                <span>info@gemlay.com</span>
              </a>
              <br />
              <a>
                {" "}
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ios/50/marker--v1.png"
                  alt="marker--v1"
                />{" "}
                <span>
                  Seo 15 , Ground Floor Jubilee junction , Sector 66 Main Mohali
                  Airport Road
                </span>
              </a>
              <div className="d-flex justify-content-evenly py-3 ">
                {/* facebook  */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/facebook-f.png"
                  alt="facebook-f"
                />

                {/* instagram  */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
                {/* youtube */}
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency-systems-filled/48/youtube-play.png"
                  alt="youtube-play"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="footer-locallink ">
        <span>Download Our Application</span>
        <br />
        <img
          src="https://www.gemlay.com/assets/footer/google-play.png"
          alt=""
        />
        <img src="https://www.gemlay.com/assets/footer/apple-pay.png" alt="" />
      </div>

      <div className="footerEnd text-center text-light">
        <p className="pone">Copyright © Gemlay 2024</p>
      </div>
    </div>
  );
};

export default PhoneFooter;
