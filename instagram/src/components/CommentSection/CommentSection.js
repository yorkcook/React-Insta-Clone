import React from "react";

const CommentSection = ({ comment }) => {
  return (
    <div className="comment-container">
      <div className="comment-list">
        {comments.map(() => {
          <p>
            {comment.username} {comment.text}
          </p>;
        })}
      </div>
      <form>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

export default CommentSection;
