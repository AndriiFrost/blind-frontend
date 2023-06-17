import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDeviceAdd = () => {
  let navigate = useNavigate();
  const [specificDeviceTopicSubName, setSpecificDeviceTopicSubName] =
    useState("");

  function addDevice(newDevice) {
    console.log(newDevice.specificDeviceTopicSubName);
    const token = localStorage.getItem("Authentication");

    axios
      .post(
        "http://localhost:8084/api/v1/admin/device",
        {
          specificDeviceTopicSubName: newDevice.specificDeviceTopicSubName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }).finally(() => {
        navigate("/admin/devices");
      });

  }

  return (
    <div className="wrapper">
      <div className="form">
        <form className="form">
          <div className="field">
            <input
              type="text"
              placeholder="specific device topic sub name"
              onChange={(e) => setSpecificDeviceTopicSubName(e.target.value)}
            />
          </div>
          <div className="field">
            <button
              type="button"
              className="submit"
              onClick={() =>
                addDevice({
                  specificDeviceTopicSubName: specificDeviceTopicSubName,
                })
              }
            >
              Create
            </button>
          </div>

          <div className="signup-link">
            <p className="message">
              Cancel <Link to="/admin/devices">Cancel</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDeviceAdd;
