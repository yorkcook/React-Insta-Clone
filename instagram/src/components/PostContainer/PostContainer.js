import React from "react";
import CommentSection from "../CommentSection/CommentSection";
//import styled, { css } from "styled-components";
import MainPicture from "./PostContainerStyle";

const PostContainer = props => {
  console.log(props);

  const Comments = styled.img`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
  `;

  const handleSubmit = e => {
    e.preventDefault();
    const newComment = {
      id: 4,
      username: "Team Yolo",
      text: props.newComment
    };
    console.log(newComment, "test");
    props.addNewComment(props.post.id, newComment);
  };
  return (
    <div className="postContainer">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt="thumbnail" />
        {props.post.username}
      </div>
      <div className="postBody">
        <MainPicture src={props.post.imageUrl} alt="full" />{" "}
        <div>
         <Comments {props.post.likes} {"likes"} />
        </div>
        <div>
          {props.post.comments.map(comment => {
            return <CommentSection comment={comment} />;
          })}
        </div>
        {props.post.timestamp}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="newComment"
              value={props.newComment}
              onChange={props.changeHandler}
              placeholder="Add a comment..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
