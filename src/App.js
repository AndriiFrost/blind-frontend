import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from "./img/logo.png";
import "./css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "HelpHext",
      userData: "",
    };

    this.inputClick = this.inputClick.bind(this)
  }

  render() {
    return (
      <div className="name">
        <Header title="Hellooooooo" />
        <h1> {this.state.helpText}</h1>
        <h1> {this.state.userData}</h1>
        <input onClick={this.inputClick} 
          onChange ={event => this.setState({userData: event.target.value})}
        />
        <Image image={logo} />
      </div>
    );
  }

  inputClick() {
    this.setState({helpText: "ssss"});
    console.log("Clicked");
  }
}

export default App;
