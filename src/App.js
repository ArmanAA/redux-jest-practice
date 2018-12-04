import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import Posts from "./Components/Posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <button>Show Modal</button>
        <button>Clear Modal</button>
        <button>Populate Modal</button>
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
const mapDispatchToProps = {
  // return {
  // getPosts: posts =>
  //   dispatch({
  //     type: constants.GET_POSTS,
  //     payload: posts
  //   })
  getPosts: posts => ({
    type: constants.GET_POSTS,
    payload: posts
  })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
