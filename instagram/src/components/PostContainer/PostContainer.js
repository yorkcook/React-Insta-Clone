import React from "react";

const PostContainer = props => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        {props.username}
        {props.thumbnailUrl}
      </div>
    </div>
  );
};

export default PostContainer;
