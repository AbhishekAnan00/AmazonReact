import React, { useContext, useEffect } from "react";
import "./ProductCart.css";
import MyContext from "../../Context/Data/MyContext";
import { ProductData } from "../../ProductData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import {Filter} from '../Filter/Filter'
import { Layout } from "../Layout/Layout";

export const ProductCart = () => {
  const Context = useContext(MyContext);
  const { mode, searchKey, filterType, filterPrice } = Context;

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  // console.log(cartItem);

  //add to cart
  const addCart = (ProductData) => {
    dispatch(addToCart(ProductData));
    toast.success("add to cart");
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <> <Layout>
    <div className="product-cart">
    <Filter/>
      <div
        className="productcart"
        style={{ backgroundColor: mode === "dark" ? "grey" : "" }}
      >
        <div className="product-heading">
          <h1> Result</h1>
        </div>
        <div className="product-cart-list">
          {ProductData.filter((obj) =>
            obj.title.toLowerCase().includes(searchKey)
          )
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .map((item, k) => {
              return (
                <>
                  <div className="card" 
                  
                   key={item.id}
                  >
                    <img src={item.img} alt={item.title} onClick={() => window.location.href = `/productinfo/$(item.id)`} 
                    className="product-img" />
                    <h6>{item.description}</h6>
                    <h2>{item.title}</h2>
                   <p><b>₹</b>{item.price}</p>
                    <button onClick={() => addCart(item)} className="add-btn">Add To Cart</button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      </div>
      </Layout>
    </>
  );
};
