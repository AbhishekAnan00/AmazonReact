import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useReducer,
} from "react";
import "./ProductCart.css";
import MyContext from "../../Context/Data/MyContext";
import { ProductData } from "../../ProductData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { Filter } from "../Filter/Filter";
import { Layout } from "../Layout/Layout";

export const ProductCart = () => {

  const Context = useContext(MyContext);
  const {
    searchKey,
    filterType,
    filterPrice,
    searchName,
    selectedCategory,
    colorType,
    selectedOption,
  } = Context;

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

  //sorting

  const initialState = {
    productData: ProductData,
    sortingValue: "lowest",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_SORT_VAL":
        return {
          ...state,
          sortingValue: action.payload,
        };
      case "SORTING_PRODUCTS":
        let newSortVal;
        const { productData, sortingValue } = state;
        let tempSortVal = [...productData];

        const sortingProducts = (a, b) => {
          if (sortingValue === "lowest") {
            return a.price - b.price;
          }
          if (sortingValue === "highest") {
            return b.price - a.price;
          }
          if (sortingValue === "a-z") {
            return a.name.localeCompare(b.name);
          }
          if (sortingValue === "z-a") {
            return b.name.localeCompare(a.name);
          }
          return 0;
        };
        newSortVal = tempSortVal.sort(sortingProducts);
        return {
          ...state,
          productData: newSortVal,
        };
      default:
        return state;
    }
  };
  const [state, dispatches] = useReducer(reducer, initialState);
  const sorting = (event) => {
    let userVal = event.target.value;
    dispatches({ type: "GET_SORT_VAL", payload: userVal });
  };
  useEffect(() => {
    console.log("Before sorting:", state);
    dispatches({ type: "SORTING_PRODUCTS" });
    console.log("After sorting:", state);
  }, [state.sortingValue]);

  return (
    <>
      <Layout>
        <div className="product-cart">
          <Filter />
          <div className="productcart">
            <div className="product-heading">
              <h1> Result</h1>
              <div className="sorting">
                <form action="#">
                  <label htmlFor="sort" className="sorting-label">
                    sort by :
                    <select
                      id="sort"
                      className="sorting-select"
                      onChange={sorting}
                    >
                      <option value="lowest">lowest</option>
                      <option value="#" disabled></option>
                      <option value="highest">highest</option>
                      <option value="#" disabled></option>
                      <option value="a-z">a-z</option>
                      <option value="#" disabled></option>
                      <option value="z-a">z-a</option>
                    </select>
                  </label>
                </form>
              </div>
            </div>
            <div className="product-cart-list">
              {ProductData.filter((obj) =>
                obj.title.toLowerCase().includes(searchKey)
              )
                .filter((obj) => obj.name.toLowerCase().includes(searchName))
                .filter((obj) => obj.title.toLowerCase().includes(filterType))
                .filter((obj) => obj.price.includes(filterPrice))
                .filter((obj) =>
                  obj.category.toLowerCase().includes(selectedCategory)
                )
                .filter((obj) => obj.color.toLowerCase().includes(colorType))
                .filter((obj) =>
                  obj.options.toLowerCase().includes(selectedOption)
                )
                .map((item, index) => {
                  return (
                    <>
                      <div className="card" key={index}>
                        <img
                          src={item.img}
                          alt={item.title}
                          onClick={() =>
                            (window.location.href = `/productinfo/$(item.id)`)
                          }
                          className="product-img"
                        />
                        <h6>{item.description}</h6>
                        <h2>{item.title}</h2>
                        <p>
                          <b>$</b>
                          {item.price}
                        </p>
                        <button
                          onClick={() => addCart(item)}
                          className="add-btn"
                        >
                          Add To Cart
                        </button>
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
