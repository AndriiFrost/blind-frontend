import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

const Blind = (props) => {
  const blind = props.blind;
  let navigate = useNavigate();
  const [deviceId, setDeviceId] = useState(blind.id);
  console.log(deviceId);
  return (
    <div className="blind">
      <h4>Blind name:</h4>
      <p className="message">{blind.deviceName}</p>
      <h4>Blind description:</h4>
      <p className="message">{blind.deviceDescription}</p>
      <h4>Blind option:</h4>
      <p className="message"> {blind.blindDeviceOption}</p>
      <h4>Close/Open when temperature higher than:</h4>
      <p className="message"> {blind.temperatureForSensor}</p>
      <div className="field">
            <button
              type="button"
              className="submit"
              onClick={() =>
                navigate(`/device/${deviceId}/edit`)
              }
            >
              Edit
            </button>
          </div>
    </div>
  );
};


export default Blind;