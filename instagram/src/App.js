import React from "react";

import "./App.css";

import dummyData from "./dummyData.js";
import SearchBar from "./components/SearchBar/SearchBar";

import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <SearchBar />
        <h2>Welcome to your Insta App</h2>

        {this.state.data.map(post => {
          return <PostContainer post={post} />;
        })}

        {/* {this.state.data.map(post => {
          // return <PostContainer />;
          return <PostContainer post={post} key={post.username} />;
          // return <PostContainer post={post} />;
        })} */}
      </div>

      // <div>
      //   <PostContainer />
      // </div>
    );
  }
}

export default App;
