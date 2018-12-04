import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/index";
import constants from "../constants/action-types";
class Posts extends Component {
  componentDidMount() {
    const self = this;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        self.props.getPosts(json);
      });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Posts </h1>
        <ul>
          {this.props.posts.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
        </ul>
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
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { getPosts: getPosts }
)(Posts);
