import React, { useState } from "react";
import Header from "./components/Header";
import Blinds from "./components/Blinds";
import AddBlind from "./components/AddBlind";
import "./css/main.css";

const App = () => {
  const [blinds, setBlinds] = useState(blindDefaultArray);

  function addBlind(blind) {
    const id = blinds.length + 1;
    setBlinds([...blinds, { id, ...blind }]);
  }
  return (
    <div>
      <Header title="blinds list" />
      <main>
        <Blinds blindDefaultArray={blinds} />
      </main>
      <aside>
        <AddBlind onAdd={addBlind}></AddBlind>
      </aside>
    </div>
  );
};

const blindDefaultArray = [
  {
    id: 1,
    nameForBlind: "Dinning room",
    selectionOfFunctionality: "OPEN_BLIND",
    descriptionForFunctionality: "Blind is opened",
  },
  {
    id: 2,
    nameForBlind: "Slipping room",
    selectionOfFunctionality: "CLOSE_BLIND",
    descriptionForFunctionality: "Blind is closed",
  },
];

export default App;
