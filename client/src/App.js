import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Order from "./Order";
import Payment from "./Payment";
import Update from "./Update";
import UserHome from "./UserHome";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Items from "./Items";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/update" element={<Update />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/createuser" element={<CreateUser/>} />
          <Route path="/updateuser/:id" element={<UpdateUser/>} />
          <Route path="/items" element={<Items/>} />
        </Routes>
      </BrowserRouter>
     </div>
  );
};

export default App;
