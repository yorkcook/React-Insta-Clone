import React from "react";

const Comment = props => {
  return (
    <div>
      {props.comment.username} <p>{props.comment.text}</p>
    </div>
  );
};

export default Comment;
