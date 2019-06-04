import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  console.log(props);
  return (
    <div className="comment-container">
      <Comment comment={props.comment} />
    </div>
    //   <form>
    //     <input type="text" placeholder="Search" />
    //   </form>
  );
};

export default CommentSection;
