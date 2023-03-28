import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

const Blind = (props) => {
  console.log(props.blind);
  const blind = props.blind;
  return (
    <div className="blind">
      <IoCloseCircleSharp className="delete-icon" />
      <IoHammerSharp className="edit-icon" />
      <h1>{blind.nameForBlind}</h1>
      <h2>{blind.selectionOfFunctionality}</h2>
      <h2>{blind.descriptionForFunctionality}</h2>
    </div>
  );
};

export default Blind;
