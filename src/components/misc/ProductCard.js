import React from "react";
import "./ProductCard.css";

const ProductCard = (el) => {
  return (
    <div key={el.id} >
      <div className="display-data">
        <img className="api-image" src={el.image} alt=""/>
        <p className="pd-name">{el.category}</p>
        <p className="pd-des">{el.description}</p>
        <p className="pd-price">${el.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;