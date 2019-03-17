import React, { Component } from "react";
import Header from "./components/Header";
import "./index.css";
import TodoInput from "./components/TodoInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput />
      </div>
    );
  }
}

export default App;
