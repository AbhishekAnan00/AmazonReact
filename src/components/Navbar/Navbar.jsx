import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";
import MyContext from "../../Context/Data/MyContext";
import { useSelector } from "react-redux";
import amazon_logo from "../../assets/amazon_logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export const Navbar = () => {
  const Context = useContext(MyContext);
  const {
    searchName,
    setSearchName,
    uniqueOption,
    selectedOption,
    setSelectedOption,
  } = Context;
  //cart-count
  const cartItem = useSelector((state) => state.cart);

  //user
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user?.user?.email);
  //user logout
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };
  const search = () => {
    window.location.href = "/productcart";
  };

  //all option
  const handleOnChangeAll = () => {
    setSelectedOption("")
  }
  return (
    <div className="navbar ">
      <nav>
        <div className="logo border">
          <Link to="/">
            <img src={amazon_logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="location border">
          <div className="add-first">
            <p>Delivery To</p>
          </div>
          <div className="location-icon">
            <MdLocationPin />
          </div>
          <div className="add-sec">
            <p>india</p>
          </div>
        </div>
        <div className="nav-search">
          <select
            className="search-select"
            name="selectedOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option onClick={handleOnChangeAll} value={setSelectedOption}>All</option>
            {[...uniqueOption].map((options, index) => {
              return (
                <>
                  <option key={index} value={options}>
                    {options}
                  </option>
                </>
              );
            })}
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="search product"
            value={searchName}
            name="searchName"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <div className="search-icon">
            <IoSearch onClick={search} />
          </div>
        </div>
        <div className="flag border">
          <img
            src="https://www.sic-info.org/wp-content/uploads/2014/01/in.png"
            alt=""
          />
          <p>EN</p>
        </div>
        <div className="sign-in border">
          {user ? (
            <p onClick={logout} className="logout">
              Hello , Logout
            </p>
          ) : (
            <Link to="/login">
              <p>
                <span> Hello,Sign in</span>
              </p>
            </Link>
          )}

          <p className="sign-list">Account & Lists</p>
        </div>
        <div className="returns border">
          <p>
            <span className="return">Returns</span>
          </p>
          <Link to="/order">
            {user ? (
              <p className="sign-account">& Order</p>
            ) : (
              <Link to="/login">
                <p>
                  <span>& Order</span>
                </p>
              </Link>
            )}
          </Link>
        </div>
        <div className="nav-cart border">
          <Link to="/cart">
            <LiaShoppingCartSolid className="nav-cart-icon" />
          </Link>
          Cart
          <span className="cart-count">{cartItem.length}</span>
        </div>
      </nav>
    </div>
  );
};
