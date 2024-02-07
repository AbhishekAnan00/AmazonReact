import React, { useEffect, useState } from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { Layout } from "../../components/Layout/Layout";
import {fireDB} from "../../firebase/FirebaseConfig";
import { collection } from "firebase/firestore";

export const Cart = () => {
  //delete cartitem (icon)
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart);
  // console.log(cartItem)
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  //shipping , subtotal
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItem.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItem]);
  const shipping = parseInt(100);
  const grandtotal = shipping + totalAmount;

  //payment setting with razorpay method
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    //validation first
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("all fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  //for store in firestore firebase
  const addressInfo = {
    name,
    address,
    pincode,
    phoneNumber,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  };
  //  console.log(addressInfo)
  //taking from razerpay method doc

  // key & secret key neccessary for payment mode
  var options = {
    key: "",
    key_secret: "",
    amount: parseInt(grandtotal * 100),
    currency: "INR",
    order_receipt: "order_rcptid_" + name,
    name: "amazon",
    description: "for testing purpose",
    handler: function (response) {
      // console.log(response)
      toast.success("Payment Successful");

      const paymentId = response.razorpay_payment_id;
      // store in firebase
      const orderInfo = {
        cartItem,
        addressInfo,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        email: JSON.parse(localStorage.getItem("user")).user.email,
        userid: JSON.parse(localStorage.getItem("user")).user.uid,
        paymentId,
      };

      try {
        const orderRef = collection(fireDB, "order");
        addDoc(orderRef, orderInfo);
      } catch (error) {
        console.log(error);
      }
    },

    theme: {
      color: "#3399cc",
    },
  };
  var pay = new window.Razorpay(options);
  pay.open();
  console.log(pay);


return (
  <>
    <Layout>
      <div className="cart">
        <div className="cart-heading">
          <h2>Shopping Cart</h2>
        </div>
        {cartItem.map((item, k) => {
          return (
            <>
              <div className="cartitem">
                <div className="cart-left">
                  <div className="cart-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-img-info">
                    <p className="cart-title">{item.title}</p>
                    <p className="cart-des">{item.description}</p>
                    <p className="cart-price"> ₹{item.price}</p>
                  </div>
                  <div className="cart-dlt">
                    <MdDelete onClick={() => deleteCart(item)} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="cart-right">
        <div className="cart-subtotal">
          <p>subtotal</p>
          <p> ₹{totalAmount}</p>
        </div>
        <div className="cart-shipping">
          <p>shipping</p>
          <p> ₹{shipping}</p>
        </div>
        <div className="cart-total">
          <b>total</b>
          <b> ₹{grandtotal}</b>
        </div>
        <div className="cart-buy-btn">
          <Link to="/model">Proceed to Buy</Link>
        </div>
      </div>
    </Layout>
  </>
);
};
