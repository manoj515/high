import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/getall/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:5000/putuser/" + id, inputData).then((res) => {
      alert("Data Updated Succesfully");
      navigate("/userhome");
    });
  };
  return (
    <div>
      <div className="contu">
        <center>
            <h2>Update the users</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Id:</label>
            <input
              type="number" disabled
              className="input-size"
              name="id"
              value={inputData.id}
              onChange={(e) =>
                setInputData({ ...inputData, id: e.target.value })
              }
            />
            <br />
            <br />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="input-size"
              name="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
            <br />
            <br />
            <label>Mobile:-</label>
            <input
              type="text"
              className="input-size"
              name="mobile"
              value={inputData.mobile}
              onChange={(e) =>
                setInputData({ ...inputData, mobile: e.target.value })
              }
            />
            <br />
            <br />
            <label>Email:-</label>
            <input
              type="email"
              className="input-size"
              name="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            <br />
            <br />
            <label>Password:-</label>
            <input
              type="password"
              className="input-size"
              name="password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
            <br />
            <br />
            <label>Confirmpassword:-</label>
            <input
              type="password"
              className="input-size"
              name="confirmpassword"
              value={inputData.confirmpassword}
              onChange={(e) =>
                setInputData({ ...inputData, confirmpassword: e.target.value })
              }
            />
            <br />
            <br />
            <br />
            <button className="btn btn-info">Update</button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default UpdateUser;
