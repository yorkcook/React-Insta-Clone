import React from "react";

import "./App.css";

import dummyData from "./dummyData.js";
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components";
import PostContainer from "./components/PostContainer/PostContainer";
//import CommentSection from "./components/CommentSection/CommentSection";
//import CommentBar from "./components/CommentBar/CommentBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      filteredPosts: [],
      // comments: [],
      newComment: ""
    };
  }

  addNewComment = (postId, newComment) => {
    const newPost = this.state.data.filter(post => postId === post.id)[0];

    newPost.comments.push(newComment);
    this.setState({
      data: [...this.state.data, newPost],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <SearchBar
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />

        {this.state.filteredPosts.length === 0
          ? this.state.data.map(post => {
              return (
                <PostContainer
                  post={post}
                  filteredPosts={this.state.filteredPosts}
                  searchFilter={this.searchFilter}
                  addNewComment={this.addNewComment}
                  changeHandler={this.changeHandler}
                  newComment={this.state.newComment}
                  // comments={this.comments}
                />
              );
            })
          : this.state.filteredPosts.map(post => {
              return (
                <PostContainer
                  post={post}
                  filteredPosts={this.state.filteredPosts}
                  searchFilter={this.searchFilter}
                  addNewComment={this.addNewComment}
                  changeHandler={this.changeHandler}
                  newComment={this.state.newComment}
                  // comments={this.comments}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
