import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

const AdminBlind = (props) => {
  const blind = props.blind;
  return (
    <div className="blind">
      <h4>Blind option:</h4>
      <p className="message">{blind.blindDeviceOption}</p>
      <h4>Blind code:</h4>
      <p className="message">{blind.specialDeviceCode}</p>
      <h4>Blind code password:</h4>
      <p className="message"> {blind.specialDevicePasswordCode}</p>
      <h4>Blind sub:</h4>
      <p className="message">Blind sub: {blind.specialDeviceTopicSubName}</p>
    </div>
  );
};

export default AdminBlind;