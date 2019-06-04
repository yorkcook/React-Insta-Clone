import React from "react";

// const PostContainer = ({
//   username,
//   thumbnailUrl,
//   imageUrl,
//   likes,
//   timestamp
// }) => {
//   return (
//     <div className="postContainer">
//       <div className="postHeader">
//         {username}
//         {thumbnailUrl}
//       </div>
//       <div>
//         {imageUrl}
//         {likes}
//         {timestamp}
//       </div>
//       {/* <CommentSection /> */}
//     </div>
//   );
// };

const PostContainer = props => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        {props.username} {props.thumbnailUrl}
      </div>
      <div className="postBody">
        {props.imageUrl} {props.likes} {props.timestamp}
      </div>
    </div>
  );
};

export default PostContainer;
