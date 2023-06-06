import React, { useState } from "react";
import "./App.css";
import orange from "./orange.mp4";
import { message } from "antd";
import {Link} from "react-router-dom"
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const { name, email, mobile, password, confirmpassword } = data;
  const changeHolder = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      message.success("Register Sucess");
    }, 2000);
    fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(data);
  };
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="42" color='white' className="bi bi-house" viewBox="0 0 16 16">
             <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
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
        <video autoPlay loop muted poster="./myimage.jpg">
          <source src={orange} type="video/mp4" />
        </video>
        <center>
          <form onSubmit={submitHandler}>
            <div>
              <h2 className="title-head">Order Food</h2>
            </div>
            <div>
              <span className="spanname">Name:</span>
              <input
                type="text"
                name="name"
                value={name}
                className="hello"
                placeholder="Name"
                onChange={changeHolder}
              />
              <br />
              <span className="spanname">Email:</span>
              <input
                type="email"
                name="email"
                value={email}
                className="hello"
                placeholder="Email"
                onChange={changeHolder}
              />
              <br />
              <span className="spanname">Mobile:</span>
              <input
                type="mobile"
                name="mobile"
                value={mobile}
                className="hello"
                placeholder="Mobile"
                onChange={changeHolder}
              />
              <br />
              <span className="spanname">Password:</span>
              <input
                type="password"
                name="password"
                value={password}
                className="hello"
                placeholder="Password"
                onChange={changeHolder}
              />
              <br />
              <span className="spanname">Confirmpassword:</span>
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                className="hello"
                placeholder="confirmpassword"
                onChange={changeHolder}
              />
              <br />
              <br />
              <input type="submit" className="regibtn" name="Submit" />
              <Link to="/login"><button className="register-login">Login</button></Link>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Register;
