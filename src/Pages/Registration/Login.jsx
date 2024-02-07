import React, { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate()
  const login = async () => {
    console.log(loginEmail, loginPassword);
   if (loginEmail === "" || loginPassword=== ""){
      return toast.error("all field are required")
   }
   
  try{
     const result = await signInWithEmailAndPassword(auth, loginEmail,loginPassword)
     toast.success("login success")
     localStorage.setItem("user",JSON.stringify(result))
     navigate("/")
    
  }catch(error){
     console.log(error)
  }
  };

  return (
    <div className="sign">
    <div className="login">
      <h2>Sign in</h2>
      <div className="login-input">
        <b>Enter Your Email</b>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      </div>
      <div className="login-input">
        <b>Password</b>
      <input
        className="login-input"
        type="text"
        placeholder="password"
        name="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      </div>
      
      <button onClick={login} className="login-btn">Sign in</button>
      <p className="new-user">______New to Amazon?______</p>
      <Link to="/signup">
        <button className="signup-btn">Create an account</button>
      </Link>
    </div>
    </div>
  );
};
