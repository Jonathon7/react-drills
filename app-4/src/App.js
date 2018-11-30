import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(val) {
    this.setState({ user: val });
  }

  handleChange1(val) {
    this.setState({ password: val });
  }

  handleClick() {
    alert(`Username: ${this.state.user}, Password: ${this.state.password}`);
  }

  render() {
    return (
      <div style={{ display: "flex", maxWidth: "400px", margin: "0 auto" }}>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <input type="text" onChange={e => this.handleChange1(e.target.value)} />
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default App;
