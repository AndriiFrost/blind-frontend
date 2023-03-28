import React, { useState } from "react";

const AddBlind = (props) => {
  const [nameForBlind, setNameForBlind] = useState("");
  const [selectionOfFunctionality, setSelectionOfFunctionality] = useState("");
  const [descriptionForFunctionality, setDescriptionForFunctionality] =
    useState("");

  return (
    <form>
      <input
        placeholder="nameForBlind"
        onChange={(e) => setNameForBlind(e.target.value)}
      ></input>
      <input
        placeholder="selectionOfFunctionality"
        onChange={(e) => setSelectionOfFunctionality(e.target.value)}
      ></input>
      <textarea
        placeholder="descriptionForFunctionality"
        onChange={(e) => setDescriptionForFunctionality(e.target.value)}
      ></textarea>
      <button type="button" onClick={ () => props.onAdd({
        nameForBlind: nameForBlind,
        selectionOfFunctionality: selectionOfFunctionality,
        descriptionForFunctionality: descriptionForFunctionality,

      })}>Add</button>
    </form>
  );
};

export default AddBlind;
