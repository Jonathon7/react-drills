import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      displayArr: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>
          {this.state.displayArr.map(i => (
            <li style={{ listStyleType: "none", lineHeight: "1.8" }}>{i}</li>
          ))}
        </h2>
      </div>
    );
  }
}

export default App;
