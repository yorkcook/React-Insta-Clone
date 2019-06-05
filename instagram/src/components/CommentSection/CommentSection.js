import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  console.log(props);
  return (
    <div className="comment-container">
      <Comment comment={props.comment} />
    </div>
  );
};

export default CommentSection;
