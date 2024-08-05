import React from "react";
import "./ProductOne.css";

const ProductOne = () => {
  return (
    <div className="header mt-4">
      <div className="row container-fluid">
        <div className="col-lg-5 bg-warning">
          <div className="Dimond_image">
            <img src="src/assets/image/Chavvi-Diamond-Ring_YA_01.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-7 bg-info">
          <div className="d-flex justify-content-between">
            <span className="Span_heading">Chavvi Diamond Ring</span>
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
      </div>
    </div>
  );
};

export default ProductOne;
