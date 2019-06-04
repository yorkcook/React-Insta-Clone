import React from "react";

import "./App.css";

import dummyData from "./dummyData.js";
import SearchBar from "./components/SearchBar/SearchBar";

import PostContiner from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBar />
        <h2>Welcome to your Insta App!</h2>

        {this.state.data.map(post => {
          return <PostContiner post={post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default App;
