import React from "react";

import "./App.css";

import dummyData from "./dummyData.js";
import SearchBar from "./components/SearchBar/SearchBar";

import PostContainer from "./components/PostContainer/PostContainer";
//import CommentBar from "./components/CommentBar/CommentBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

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
