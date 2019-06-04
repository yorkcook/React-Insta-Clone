import React from "react";

const CommentSection = props => {
  //   console.log(comment);
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
