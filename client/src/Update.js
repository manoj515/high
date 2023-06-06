import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';





const Update= () => {
  const [image, setImage] = useState(null)
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
    };
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it ha an error"));
  });
 
  
  return (
    <div className='App'>
      <form onSubmit={handleUpload}>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><input type="file" onChange={handleImageChange}/></td>
          <td><input type="text"/></td>   
          <td><input type="text"/></td>
          <td><button type="submit" className=" btn btn-success btn-upda">Add</button>
          <Link to="/edit"><button className="btn btn-warning btn-upda">Edit</button></Link>
          <button className="btn btn-danger btn-upda">Delete</button></td>
        </tr>
      </table>
      <div>
      {data.map((singleData) => {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint8Array(singleData.picture.data)
              )
            );
            return (
              <img
                src={`data:img/png;base64,${base64String}`}
                alt="123213"
                className="imagesset"
                width="150"
                height="150"
              />
            );
          })}
          </div>
      </form>
    </div>
  )
}

export default Update;
