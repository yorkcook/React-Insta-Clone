import React from "react";

const PostContainer = ({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp
}) => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        {username}
        {thumbnailUrl}
      </div>
      <div>
        {imageUrl}
        {likes}
        {timestamp}
      </div>
      {/* <CommentSection /> */}
    </div>
  );
};

export default PostContainer;
