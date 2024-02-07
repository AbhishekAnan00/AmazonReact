import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";
import MyContext from "../../Context/Data/MyContext";
import { useSelector } from "react-redux";
import amazon_logo from "../../assets/amazon_logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { ProductData } from "../../ProductData";

export const Navbar = () => {
  const Context = useContext(MyContext);
  const { mode, toggleMode, searchKey, setSearchKey } = Context;
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
  return (
    <div className="navbar ">
      <nav
      >
        <div className="logo border">
         <Link to="/"><img src={amazon_logo} alt="" className="logo" /></Link> 
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
            name="searchkey"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          >
            {ProductData.map((item) => {
              return (
                <>
                  <option>All</option>
                  <option>{item.title}</option>
                </>
              );
            })}
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="search product"
            value={searchKey}
            name="searchKey"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <div className="search-icon">
            <IoSearch />
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
