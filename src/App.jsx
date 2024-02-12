import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Order } from "./Pages/Order/Order";
import { Cart } from "./Pages/Cart/Cart";
import { NoPage } from "./Pages/NoPage/NoPage";
import { MyState } from "./Context/Data/MyState";
import { Login } from "./Pages/Registration/Login";
import { SignUp } from "./Pages/Registration/SignUp";
import { ProductInfo } from "./Pages/ProductInfo/ProductInfo";
import { Model } from "./components/Model/Model";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Children } from "react";
import { ProductCart } from "./components/ProductCart/ProductCart";
import { useReducer } from "react";

function App() {

  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRouter>
                  <Order />
                </ProtectedRouter>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/model" element={<Model />} />
            <Route path="/productcart" element={<ProductCart  />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </>
  );
}

export default App;

//user protected panel

const ProtectedRouter = ({ Children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return Children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
