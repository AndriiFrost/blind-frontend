import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlind = () => {
  let navigate = useNavigate();
  const [deviceName, setDviceName] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");
  const [temperatureForSensor, setTemperatureForSensor] = useState("");
  const [blindDeviceOption, setBlindDeviceOption] = useState("");

  const { deviceId } = useParams();

  const handleOptionChange = (event) => {
    setBlindDeviceOption(event.target.value);
  };

  function editDevice(device) {
    const token = localStorage.getItem("Authentication");

    axios
      .post(
        "http://localhost:8084/api/v1/device/" + deviceId,
        {
          deviceName: device.deviceName,
          deviceDescription: device.deviceDescription,
          temperatureForSensor: device.temperatureForSensor,
          blindDeviceOption: device.blindDeviceOption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        if (!response.data) {
          navigate("/devices/add/not-found");
        } else {
          navigate("/devices");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="wrapper">
      <div className="logout">
        <button
          type="button"
          className="submit"
          onClick={() => {
            localStorage.setItem("Authentication", "");
            localStorage.setItem("Role", "");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
      <div className="form">
        <form className="form">
          <h4>Blind name</h4>
          <div className="field">
            <input
              type="text"
              placeholder="Blind name"
              onChange={(e) => setDviceName(e.target.value)}
            />
          </div>
          <h4>Blind description</h4>
          <div className="field">
            <input
              type="text"
              placeholder="Blind description"
              onChange={(e) => setDeviceDescription(e.target.value)}
            />
          </div>
          <h4>Temperature for sensor</h4>
          <div className="field">
            <input
              type="text"
              placeholder="Temperature for sensor"
              onChange={(e) => setTemperatureForSensor(e.target.value)}
            />
          </div>
          <h4>Blind Option</h4>
          <div className="field">
            <select value={blindDeviceOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="OPEN_BLIND">OPEN_BLIND</option>
              <option value="CLOSE_BLIND">CLOSE_BLIND</option>
              <option value="OPEN_BLIND_WHEN_LIGHT">
                OPEN_BLIND_WHEN_LIGHT
              </option>
              <option value="CLOSE_BLIND_WHEN_LIGHT">
                CLOSE_BLIND_WHEN_LIGHT
              </option>
              <option value="OPEN_BLIND_WHEN_TEMPERATURE_HIGHER">
                OPEN_BLIND_WHEN_TEMPERATURE_HIGHER
              </option>
              <option value="CLOSE_BLIND_WHEN_TEMPERATURE_HIGHER">
                CLOSE_BLIND_WHEN_TEMPERATURE_HIGHER
              </option>
            </select>
          </div>
          <div className="field">
            <button
              type="button"
              className="submit"
              onClick={() =>
                editDevice({
                  deviceName: deviceName,
                  deviceDescription: deviceDescription,
                  temperatureForSensor: temperatureForSensor,
                  blindDeviceOption: blindDeviceOption,
                })
              }
            >
              Update
            </button>
          </div>
          <div></div>
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

export default EditBlind;
