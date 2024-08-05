import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src="./src/assets/image/Chavvi-Diamond-Ring_YD_04.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <div className="cardBody">
              <div>
                <h5 className="card-title card_title">&#8377;33,908</h5>
                <p className="card-text card_text">supporting text</p>
              </div>
              <div>
                <div className="divOne"></div>
                <div className="divTwo"></div>
                <div className="divThree"></div>
              </div>
            </div>

            {/* <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div> */}

            {/* card footer  */}

            <div className=" row">
              <div className="col-lg-6 view-similar">
                <img
                  src="https://www.gemlay.com/img/card/viewSimilar.svg"
                  alt=""
                  height="10px"
                />
                View Similar
              </div>
              <div className="col-lg-6 buy-now bg-info">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
