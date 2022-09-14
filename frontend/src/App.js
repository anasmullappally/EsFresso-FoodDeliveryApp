import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//user
import Home from "./Pages/User/Home";
//admin
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import AdminHome from "./Pages/Admin/Home/Home";
import Users from "./Pages/Admin/Users/Users";
//vendor
import VendorLogin from "./Pages/Vendor/Login/Login";
import VendorRegister from "./Pages/Vendor/Register/Register";



function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/users" element={<Users />} />

          <Route path="/vendor" element={<VendorLogin />} />
          <Route path="/vendor/register" element={<VendorRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
