import React from "react";
import * as ReactDomClient from "react-dom/client";

class Header extends React.Component {
  render() {
    return <header> Header</header>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <Header />
        <h1> HEllo</h1>
        <input onClick={this.inputClick}/>
      </div>
    );
  }

  inputClick() {console.log("Clicked")}
}

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(<App />);
