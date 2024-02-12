import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import amazon_logo from "../../assets/amazon_logo.png";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    // console.log(name,email,password)
    if (name === "" || email === "" || password === "") {
      return toast.error("all fields are required");
    }
    try {
      //in authentication
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);
      //for showing in database
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setName("");
      setEmail("");
      setPassword("");
      toast.success("signup success");
    } catch (error) {
      toast.error("sign failed");
    }
  };

  return (
    <div className="sign">
      <div className="login">
      <img src={amazon_logo} alt="" style={{ height: "45px" , width: "80px" }} />
        <h2>Create account</h2>
        <div className="login-input">
          <b>Your name</b>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="login-input">
          <b>Email</b>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input">
          <b>Password</b>
          <input
            type="text"
            name="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={signup} className="login-btn">
          Create Your Amazon Account
        </button>
        <p>Already have an account?</p>
        <Link to="/login">
          <b>login</b>
        </Link>
      </div>
    </div>
  );
};
