import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from './img/logo.png';
import './css/main.css';



class App extends React.Component {
  render() {
    return (
      <div className="name">
        <Header title = "Hellooooooo"/>
        <h1> HEllo</h1>
        <input onClick={this.inputClick}/>
        <Image image ={logo}/>
      </div>
    );
  }

  inputClick() {console.log("Clicked")}
}

export default App