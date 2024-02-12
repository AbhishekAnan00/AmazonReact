import React, { useEffect, useReducer } from "react";
import "./ProductInfo.css";
import { ProductData } from "../../ProductData";
import { useParams } from "react-router-dom";

export const ProductInfo = () => {
  
//  const initialState = {
//  }   
//  const reducer = (state,action) => {
   
//    switch (action.type){
//     case "GET_SINGLE_PRODUCT" :
//     return {
//       ...state,
//     }
//    default: 
//    return state;
//  }
//  }
//  const [state , dispatch] = useReducer(reducer,initialState)

//  const getSingleProduct = () => {
//   dispatch({type: "GET_SINGLE_PRODUCT" , payload: ProductData})
//  }
 
//  const {id} = useParams()

//  const { img, description ,rating, price ,title } = singleProduct;
//   useEffect(() => {
//     getSingleProduct(`${id}`)
//   },[state.singleProduct])

  return (
    <div className="productinfo">
        {/* <div
          className="product-info-page"
        >
          <div className="product-info-left">
            <img src={img} alt={""} />
          </div>
          <div className="product-info-right">
            <div className="right-info-div1">
              <h1>{title}</h1>
              <p>{description}</p>
              <b>{rating}</b>
            </div>
            <div className="product-info-div2">
              <h2>{price}</h2>
              <button className="btn">Add To Cart</button> <b>like</b>
            </div>
          </div>
        </div> */}
    </div>
  );
};
