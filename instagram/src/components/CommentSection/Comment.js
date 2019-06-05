import React from "react";

class Comment extends React.Component {
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
      <div>
        <div className="comments">
          <h4>{this.props.comment.username}</h4>{" "}
          <p>{this.props.comment.text}</p>
        </div>
        {/* <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="Add a comment..."
          />
        </form> */}
        ;
      </div>
    );
  }
}
// const Comment = props => {
//   return (
//     <div>
//       {props.comment.username} <p>{props.comment.text}</p>
//     </div>
//   );
// };

export default Comment;
