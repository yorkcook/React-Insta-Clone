import React from "react";

import "./App.css";

import dummyData from "./dummyData.js";
import SearchBar from "./components/SearchBar/SearchBar";

import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";
//import CommentBar from "./components/CommentBar/CommentBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: "",
      newComment: ""
    };
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Team Yolo",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
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

  render() {
    // console.log(this.state);
    return (
      <div>
        <SearchBar />

        {this.state.data.map(post => {
          return <PostContainer post={post} />;
        })}

        {/* {this.state.data.map(post => {
          // return <PostContainer />;
          return <PostContainer post={post} key={post.username} />;
          // return <PostContainer post={post} />;
        })} */}

        {/* <CommentBar /> */}
      </div>
    );
  }
}

export default App;
