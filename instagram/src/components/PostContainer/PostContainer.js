import React from "react";
// import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  // console.log(props);
  return (
    <div className="postContainer">
      <div className="postHeader">
        <p>{props.post.username}</p>
        <img src={props.post.thumbnailUrl} alt="thumbnail" />
      </div>
      <div className="postBody">
        <img src={props.post.imageUrl} alt="full" /> {props.post.likes}{" "}
        {props.post.timestamp}
      </div>
    </div>
  );
};

export default PostContainer;
