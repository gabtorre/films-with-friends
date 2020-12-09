import { CommentDiv } from "../../StyledComponents";
import Avatar from "react-avatar";

const Comment = (props) => {
  return (
    <CommentDiv className="mt-4">
      <Avatar
        className="mr-3"
        src={props.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"}
        name={props.data.displayName}
        round={true}
        size="45"
      />
      <div className="post__comment-text-container">{props.content}</div>
    </CommentDiv>
  );
};

export default Comment;
