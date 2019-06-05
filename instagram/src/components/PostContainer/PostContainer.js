import React from "react";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Team Yolo",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="postContainer">
        <div className="postHeader">
          <img src={this.props.post.thumbnailUrl} alt="thumbnail" />
          {this.props.post.username}
        </div>
        <div className="postBody">
          <img
            className="mainPicture"
            src={this.props.post.imageUrl}
            alt="full"
          />{" "}
          <div>
            {this.props.post.likes} <p>{"likes"}</p>
          </div>
          <div>
            {this.props.post.comments.map(comment => {
              return <CommentSection comment={comment} />;
            })}
          </div>
          {this.props.post.timestamp}
          <div>
            <form onSubmit={this.props.addNewComment}>
              <input
                type="text"
                name="newComment"
                value={this.props.newComment}
                onChange={this.props.changeHandler}
                placeholder="Add a comment..."
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// const PostContainer = props => {
//   console.log(props);
//   return (
//     <div className="postContainer">
//       <div className="postHeader">
//         <img src={props.post.thumbnailUrl} alt="thumbnail" />
//         {props.post.username}
//       </div>
//       <div className="postBody">
//         <img className="mainPicture" src={props.post.imageUrl} alt="full" />{" "}
//         <div>
//           {props.post.likes} <p>{"likes"}</p>
//         </div>
//         <div>
//           {props.post.comments.map(comment => {
//             return <CommentSection comment={comment} />;
//           })}
//         </div>
//         {props.post.timestamp}
//         <div>
//           <form onSubmit={props.addNewComment}>
//             <input
//               type="text"
//               name="newComment"
//               value={props.newComment}
//               onChange={props.changeHandler}
//               placeholder="Add a comment..."
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

export default PostContainer;
