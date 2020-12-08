import { CommentDiv, CommentForm, CommentInput, CommentWrapper } from '../../StyledComponents';
import Avatar from "react-avatar";


const Comment = (props) => {
    return (
        <CommentDiv>
            <CommentWrapper>
            <div style={{marginRight:"5%"}}>
                <Avatar name="Demo" round={true} size="30"/>
            </div>
                <p>{props.content}</p>
            </CommentWrapper>
        </CommentDiv>

    );
}

export default Comment;
