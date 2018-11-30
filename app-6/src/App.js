import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
  }
  // listArr = [...this.state.list, this.state.input];
  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  };

  render() {
    let list = this.state.list.map((item, i) => {
      return <Todo key={i} task={item} />;
    });
    return (
      <div className="App">
        <h1>My to-do list: </h1>
        <input
          value={this.state.input}
          placeholder="enter new task..."
          type="text"
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button onClick={this.handleClick}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
