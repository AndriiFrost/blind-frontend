import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DeviceAdd = () => {
  let navigate = useNavigate();
  const [deviceCode, setDviceCode] =
    useState("");
    const [deviceCodePassword, setDeviceCodePassword] =
    useState("");

  function addDevice(device) {
    console.log(device.deviceCode);
    const token = localStorage.getItem("Authentication");

    axios
      .post(
        "http://localhost:8084/api/v1/device", 
          {
            deviceCode: device.deviceCode,
            deviceCodePassword: device.deviceCodePassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      .then(function (response) {
        console.log(response);
        if (!response.data){
          console.log("!!!!!!")
          navigate("/devices/add/not-found");
        }else{
          navigate("/devices");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="wrapper">
      <div className="form">
        <form className="form">
          <div className="field">
            <input
              type="text"
              placeholder="Devise Code"
              onChange={(e) => setDviceCode(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Device password"
              onChange={(e) => setDeviceCodePassword(e.target.value)}
            />
          </div>
          <div className="field">
            <button
              type="button"
              className="submit"
              onClick={() =>
                addDevice({
                  deviceCode: deviceCode,
                  deviceCodePassword: deviceCodePassword,
                })
              }
            >
              Add
            </button>
          </div>

          <div className="signup-link">
            <p className="message">
              <Link to="/devices">Cancel</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeviceAdd;
