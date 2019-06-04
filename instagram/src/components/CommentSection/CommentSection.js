import React from "react";

const CommentSection = ({ username, text }) => {
  return (
    <div className="comment-container">
      <div className="comment-list">
        {comments.map(() => {
          <p>
            {username} {text}
          </p>;
        })}
      </div>
    </div>
  );
};

export default CommentSection;
