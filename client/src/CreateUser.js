import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/adduser", inputData).then((res) => {
      alert("Data Posted Succesfully");
      navigate("/userhome");
    });
  };
  return (
    <div className="cont">
      <center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Id:</label>
          <input
            type="text" disabled
            className="input-size"
            name="id"
            onChange={(e) => setInputData({ ...inputData, id: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="input-size"
            name="name"
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
            onChange={(e) =>
              setInputData({ ...inputData, confirmpassword: e.target.value })
            }
          />
          <br />
          <br />
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default CreateUser;
