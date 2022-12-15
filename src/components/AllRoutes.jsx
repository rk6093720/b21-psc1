import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import Login from "../pages/Login";
import { Orders } from "../pages/Orders";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import Signup from "../pages/Signup";
import ReqAuth from "./RegAuth";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/product/:id" element={<ReqAuth><ProductDetails /></ReqAuth>}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
