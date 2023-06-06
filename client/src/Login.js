import React, { useState } from "react";
import myVide from "./myvide.mp4";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHolder = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", data)
      .then((res) => localStorage.setItem("token", res.data));
  };
  if (localStorage.getItem("token")) {
    return <Navigate to="/items" />;
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="42"
                  color="white"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link active" aria-current="page" href="/register">
                  Register
                </a>
                <a className="nav-link active" aria-current="page" href="/login">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <h2 className="title-head">Order Food</h2>
        <video autoPlay loop muted poster="./myimage.jpg">
          <source src={myVide} type="video/mp4" />
        </video>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            className="hello"
            value={email}
            placeholder="Email"
            onChange={changeHolder}
          />
          <br />
          <input
            type="password"
            name="password"
            className="hello"
            value={password}
            placeholder="Password"
            onChange={changeHolder}
          />
          <br />
          <br />
          <input type="submit" className="regibtn" name="Submit" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
