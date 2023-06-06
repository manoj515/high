import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserHome = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/getall")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container mt-5">
      <h3>Registration Details</h3>
      <div>
        <Link to="/createuser">
          <button className="btn btn-success mb-3">Create user</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirmpassword</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d._id.disabled}</td>
              <td>{d.name}</td>
              <td>{d.mobile}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>{d.confirmpassword}</td>
              <td>
                <Link to={`/updateuser/${d._id}`}>
                  <button className=" m-2">Update</button>
                </Link>
                <button onClick={(e) => handleDelete(d._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleDelete(id) {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:5000/deleteuser/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/userhome");
      });
    }
  }
};

export default UserHome;
