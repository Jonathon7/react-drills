import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputDisplay: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ inputDisplay: val });
  }

  render() {
    return (
      <div style={{ maxWidth: "300px", margin: "0 auto" }}>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.inputDisplay}</p>
      </div>
    );
  }
}

export default App;
