import React from "react";
import "./ProductCard.css";
import Card from "./Card";

const ProductCard = () => {
  return (
    <div className="h-100">
      <div className="main_header ">
        <div className="section-heading">
          <h2>SIMILAR PRODUCTS</h2>
          <p>SAME BUT DIFFERENT</p>
        </div>

        <div className="my-5">
          <div className="row_item container-fluid ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
