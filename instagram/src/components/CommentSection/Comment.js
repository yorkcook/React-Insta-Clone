import React from "react";
import { Button } from "../Styling";

const Comment = props => {
  console.log(props.comment.username);
  console.log(props.comment.text);
  return (
    <div>
      <p>
        <b>{props.comment.username}</b> {props.comment.text}
      </p>
    </div>
  );
};

export default Comment;
