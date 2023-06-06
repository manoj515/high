import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {addtocart} from './Redex/CartAction';
import { useSelector } from "react-redux";


const Items = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  useEffect(() => {
    axios
      .get("http://localhost:5000/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="klop">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/register">
            ORDER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <br />
              <br />
              <strong>{cart.cart.length}</strong>
              <a className="nav-link active" aria-current="page" href="/cart">
                Cart
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              <a
                className="nav-link active"
                aria-current="page"
                href="/login"
                onClick={() => localStorage.removeItem("token")}
              >
                LogOut
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="33"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
              <a className="nav-link active" aria-current="page" href="/cart">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h2 className="items-heading">Products Page</h2>
        {/*<input type="text" className="items-search"/>
        <button className="items-searchbtn">Search</button>*/}
      </div>
      <div className="lkf d-flex flex-row justify-content-center">
        {data.map((d) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(d.picture.data))
          );
          return (
            <div className="card d-flex flex-row">
              <div>
                <img
                  src={`data:img/png;base64,${base64String}`}
                  alt="123213"
                  className="imagesset"
                  width="150"
                  height="130"
                />
              </div>
              <div className="d-flex flex-column">
                <h5 className="item-title">{d.title}</h5>
                <p className="item-price">Price:{d.price}/-Rs</p>
                <div className="d-flex flex-row">
                  <p className="item-quantity">
                    Quantity:-{" "}
                    <input
                      type="number"
                      className="item-quantity-input"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </p>
                  <Link to="/payment"><button className="item-order btn btn-success m-1">Order</button></Link>
                </div>
                <Link to="">
                  <button className="item-cart" onClick={()=>dispatch(addtocart())}>Add to Cart</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
