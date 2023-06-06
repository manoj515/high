import React from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  return (
    <div className="payment-img">
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
            <a className="nav-link active" aria-current="page" href="/items">
                Items
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="36"
                color="white"
                className="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <br />
              <br />
              <a className="nav-link active" aria-current="page" href="/cart">
                Cart
              </a>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="44"
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
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h2 className="payment-address"> Address</h2>
        <div>
          <span className="adress-hno">H.No :</span>
          <input className="adress-hno" type="text" />
          <span className="adress-hno">street :</span>
          <input className="adress-hno" type="text" />
        </div>
        <div>
          <span className="adress-city">City :</span>
          <input className="adress-city" type="text" />
        </div>
        <div>
          <button className="btn btn-primary addressbtn">Save</button>
          <button className="btn btn-secondary addressbtn">Edit</button>
        </div>
        <hr style={{ height: "20px", color: "blue" }} />
      </div>
      <center>
        <div>
          <h3 className="payment-head">Payment Details </h3>
        </div>
        <div>
          <span className="payment-span">Card Number :</span>
          <input className="payment-span" type="text" />
          <span className="payment-span">CVV :</span>
          <input className="payment-span" type="text" />
        </div>
        <div>
          <span className="payment-spann">Card Holder :</span>
          <input className="payment-span" type="text"/>
        </div>
        <div>
          <span className="payment-span">Exipiery Date :</span>
          <input className="payment-span" type="text" />
        </div>
        <div className="payment">
          <select name="weeks" className="paymenti">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
          <select name="Year">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
          </select>
        </div>
        <div>
          <button className="payment-button btn btn-primary">Confirm</button>
          <Link to="/items"><button className="payment-button-back btn btn-danger">Back</button></Link>
        </div>
      </center>
    </div>
  );
};

export default Payment;
