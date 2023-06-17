import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Blind from "./Blind";
import axios from "axios";

const DeviceList = () => {
  const [blinds, setBlinds] = useState([]);
  let navigate = useNavigate();

    useEffect(()=>{
    const token = localStorage.getItem("Authentication");

      axios
    .get("http://localhost:8084/api/v1/device", {
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
        <header> List of devices</header>
        <button
              type="button"
              className="submit"
              onClick={() =>
                navigate("/devices/add")
              }
            >
              Add new
            </button>
        <main>
            {blinds.map((el) => (
             <Blind key= {el.id} blind = {el}/>
            ))}
          </main>
        </div>
        );
  }
  return ( <div className="blind">
      <header> List of devices</header>
        <button
              type="button"
              className="submit"
              onClick={() =>
                navigate("/devices/add")
              }
            >
              Add
            </button>
      <h3>No blind present</h3>
  </div>)
};


export default DeviceList;
