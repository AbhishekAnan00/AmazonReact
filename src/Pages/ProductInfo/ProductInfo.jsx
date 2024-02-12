import React, { useState } from "react";
import "./ProductInfo.css";
import { ProductData } from "../../ProductData";

export const ProductInfo = () => {
  const [productData, setProductData] = useState([ProductData]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productId) => {
    const clickedProduct = productData.find(
      (product) => product.id === productId
    );
    setSelectedProduct(clickedProduct);
  };

  return (
    <div className="productinfo">
      {selectedProduct && (
        <div
          className="product-info-page"
          onClick={() => handleProductClick(product.id)}
        >
          <div className="product-info-left">
            <img src={selectedProduct.img} alt={""} />
          </div>
          <div className="product-info-right">
            <div className="right-info-div1">
              <h1>{}</h1>
              <b>{}</b>
              <p>{}</p>
            </div>
            <div className="product-info-div2">
              <h2>{}</h2>
              <button className="btn">Add To Cart</button> <b>like</b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
