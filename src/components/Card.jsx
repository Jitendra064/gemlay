import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img
            src="./src/assets/image/Chavvi-Diamond-Ring_YD_04.jpg"
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
            <div className="view-similar">
              {/* <img
                src="https://www.gemlay.com/img/card/viewSimilar.svg"
                alt=""
                height="10px"
              /> */}
              {/* <p> View Similar</p> */}
            </div>
            <div className=" buy-now bg-info text-center">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
