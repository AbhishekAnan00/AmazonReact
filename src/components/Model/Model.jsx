import React, { useContext } from "react";
import "./Model.css";
import MyContext from "../../Context/Data/MyContext";
import amazon_logo from '../../assets/amazon_logo.png'

export const Model = () => {
  const Context = useContext(MyContext);
  const {
    name,
    address,
    pincode,
    phoneNumber,
    setName,
    setAddress,
    setPincode,
    setPhoneNumber,
    buyNow,
  } = Context;
  return (
    <div className="model">
      <div className="model-preview">
    <img src={amazon_logo} alt="" style={{ width: "80px", height: "45px" , marginLeft: "70px" }} />
        <div className="model-name">
          <p>Enter Full Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="model-input"
          />
        </div>
        <div className="model-address">
          <p>Enter Full Address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="model-input"
          />
        </div>
        <div className="model-pincode">
          <p>Enter Pincode</p>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="model-input"
          />
        </div>
        <div className="model-mobile-no">
          <p>Enter Mobile no</p>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="model-input"
          />
        </div>
        <div
          className="model-order-btn"
          onClick={() => {
            buyNow();
          }}
        >
          Order Now
        </div>
      </div>
    </div>
  );
};
