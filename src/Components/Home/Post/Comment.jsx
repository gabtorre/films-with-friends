import { CommentDiv } from "../../StyledComponents";
import Avatar from "react-avatar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Comment = (props) => {

  return (
    <CommentDiv className="mt-4">
      <OverlayTrigger
        key={props.key + props.id}
        placement="top"
        overlay={<Tooltip id={`tooltip-top`}>{props.username}</Tooltip>}
      >
        <Avatar
          className="mr-3"
          src={props.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"}
          name={props.data.displayName}
          round={true}
          size="45"
        />
      </OverlayTrigger>
      <div className="post__comment-text-container">{props.content}</div>
    </CommentDiv>
  );
};

export default Comment;
