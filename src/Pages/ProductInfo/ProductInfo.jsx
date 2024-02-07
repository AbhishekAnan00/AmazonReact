import React, { useContext, useEffect, useState } from "react";
import "./ProductInfo.css";
import { useParams } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ProductData } from "../../ProductData";
import MyContext from "../../Context/Data/MyContext";
export const ProductInfo = () => {
 
  return (
    <div className="productinfo">
        <div className="product-info-page">
          <div className="product-info-left">
            <img src={"400*400"} alt={""} />
          </div>
          <div className="product-info-right">
            <div className="right-info-div1">
              <h1>title</h1>
              <b>category</b>
              <p>discription: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non totam obcaecati similique vitae facilis vel facere voluptatem consectetur magnam!</p>
            </div>
            <div className="product-info-div2">
              <h2>price</h2>
              <button className="btn">Add To Cart</button> <b>like</b>
            </div>
          </div>
        </div>
    </div>
  );
};
