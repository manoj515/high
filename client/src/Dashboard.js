import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
let sampleArray = [];

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState([]);
  const [title, setTitle] = useState([]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPrice();
    sampleArray.push({
      price: price,
      title: title,
    });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("price", price);
    formData.append("title", title);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  function handleDelete(id) {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:5000/deleteuserr/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/dashboard");
      });
    }
  }

  return (
    <div>
      <div className="colort">
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Food Order
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/items"
                >
                  Items
                </a>
                <a className="nav-link active" aria-current="page" href="/cart">
                  Cart
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/order"
                >
                  Order
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/payment"
                >
                  Payment
                </a>
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
        <center>
          <div>
            <h2 style={{ color: "#61dafb" }}>DashBoard</h2>
            {/* select process for veg and nn-veg
          <select className="holdf" name="veg">
            <option value="Non-Veg">Non-Veg</option>
            <option value="Veg">Veg</option>
          </select>
          <button className="dashboard-search">Search</button>
          <br />
  <br />*/}
          </div>
        </center>
        <div>
          <center>
            <form onSubmit={handleUpload}>
              <input type="file" onChange={handleImageChange} />
              <br />
              <label>Title:-</label>
              <input
                type="text"
                className="mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="dashboard-label">Price:-</label>
              <input
                type="text"
                className="mt-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <br />
              <button type="submit" className="form-button">
                Upload
              </button>
            </form>
            <div>
              {data.map((d) => {
                const base64String = btoa(
                  String.fromCharCode(...new Uint8Array(d.picture.data))
                );
                return (
                  <div className="product-container">
                    <img
                      src={`data:img/png;base64,${base64String}`}
                      alt="123213"
                      className="imagesset"
                      width="150"
                      height="150"
                    />
                    <div className="product-info">
                      <h5 className="dashboard-title">{d.title}</h5>
                      <button className="dashboard-btn">
                        Price:{d.price}/-RS
                      </button>
                    </div>
                    <div>
                      <button
                        className="m-1 btn btn-danger"
                        onClick={(e) => handleDelete(d._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pagination-align">
              <center>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/dashboard"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/dashboard">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/dashboard">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/dashboard">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/cart" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </center>
            </div>
            <div>
              <button
                onClick={() => localStorage.removeItem("token")}
                className="logoutbtn"
              >
                <Link to="/login">LogOut</Link>
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
