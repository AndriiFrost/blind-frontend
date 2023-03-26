import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from "./img/logo.png";
import "./css/main.css";

var baseUrl = "http://localhost:8084/api/v1/device";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "HelpHext",
      userData: "",
    };
  }

  render() {
    return (
      <div className="name">
        <h1>Close blind</h1>
        <button className="button" onClick={this.closeBlindClick}>
          Close blind
        </button>
        <h1>Open blind</h1>
        <button className="button" onClick={this.openBlindClick}>
          Open blind
        </button>
        <h1>Open when light</h1>
        <button className="button" onClick={this.openBlindWhenLightClick}>
          Opent when light
        </button>
        {/* <Header title="Hellooooooo" />
        <h1> {this.state.helpText}</h1>
        <h1> {this.state.userData}</h1>
        <input onClick={this.inputClick} 
          onChange ={event => this.setState({userData: event.target.value})}
        />
        <Image image={logo} /> */}
      </div>
    );
  }



  closeBlindClick() {
    axios.put(baseUrl,null,{params: {openBlind: 0, caseForBlind: 1}});
    console.log("blind close");
  }

  openBlindClick() {
    axios.put(baseUrl,null,{params: {openBlind: 1, caseForBlind: 1}});
    console.log("blind open");
  }

  openBlindWhenLightClick() {
    axios.put(baseUrl,null,{params: {openBlind: 1, caseForBlind: 0}});
    console.log("blind open when light");
  }

  // inputClick() {
  //   this.setState({helpText: "ssss"});
  //   console.log("Clicked");
  // }
}

export default App;
