import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ filteredString: val });
  }

  render() {
    let filteredFoods = this.state.foods
      .filter(elem => {
        return elem.includes(this.state.filteredString);
      })
      .map(elem => (
        <div style={{ textAlign: "center" }}>
          <h2>{elem}</h2>
        </div>
      ));
    return (
      <div style={{ maxWidth: "135px", margin: "0 auto" }}>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {filteredFoods}
      </div>
    );
  }
}
export default App;
