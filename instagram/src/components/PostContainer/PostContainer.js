import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props);
  return (
    <div className="postContainer">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt="thumbnail" />
        {props.post.username}
      </div>
      <div className="postBody">
        <img className="mainPicture" src={props.post.imageUrl} alt="full" />{" "}
        <div>{props.post.likes}</div>
        <div>
          {props.post.comments.map(comment => {
            return <CommentSection comment={comment} />;
          })}
        </div>
        {props.post.timestamp}
        <div>
          <form>
            <input type="text" placeholder="Add a comment..." />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
