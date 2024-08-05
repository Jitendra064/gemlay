import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="col col90">
        <div className="card h-100">
          <img
            src="https://cdn.gemlay.com/media1/garnet/product/images/rings/LR-2152-GL/images/Chavvi-Diamond-Ring_YA.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body card_body">
            <h5 className="card-title">&#8377;33,908</h5>
            <p className="card-text">supporting text</p>
            <div className="cardOption">
              <div className="divOne"></div>
              <div className="divTwo"></div>
              <div className="divThree"></div>
            </div>
          </div>
          <div className="footer_end ">
            <div className="view-similar"></div>
            <div className=" buy-now bg-info text-center">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
