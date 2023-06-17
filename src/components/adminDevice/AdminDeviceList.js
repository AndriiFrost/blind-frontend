import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AdminBlind from "./AdminBlind";

const AdminDeviceList = (props) => {
  console.log(props.blinds)
  const [blinds, setBlinds] = useState([]);
  let navigate = useNavigate();

    useEffect(()=>{
    const token = localStorage.getItem("Authentication");

      axios
      .get("http://localhost:8084/api/v1/admin/device", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response =>{
        setBlinds(response.data)
      })
    },[]);
 
    if( blinds.length > 0 ){
      return (
        <div>
        <header> List of not active user devices</header>
        <button
              type="button"
              className="submit"
              onClick={() =>
                navigate("/admin/devices/add")
              }
            >
              Create
            </button>
        <main>
            {blinds.map((el) => (
             <AdminBlind key= {el.id} blind = {el}/>
            ))}
          </main>
        </div>
        );
  }
  return ( <div className="blind">
      <header> List of not active user devices</header>
        <button
              type="button"
              className="submit"
              onClick={() =>
                navigate("/admin/devices/add")
              }
            >
              Create
            </button>
      <h3>No blind present</h3>
  </div>)
};



export default AdminDeviceList;
