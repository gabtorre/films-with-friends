import { CommentDiv, CommentForm, CommentInput, CommentWrapper } from '../../StyledComponents';
import Avatar from "react-avatar";


const Comment = (props) => {
    return (
        <CommentDiv className="mt-4">
            {/* <CommentWrapper> */}
            <Avatar className="mr-3" name="Demo" round={true} size="45"/>
            <div className="post__comment-text-container">{props.content}</div>
            {/* </CommentWrapper> */}
        </CommentDiv>

    );
}

export default Comment;
