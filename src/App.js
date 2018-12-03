import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import Posts from "./Components/Posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Posts />
      </div>
    );
  }
}

export default hot(module)(App);
