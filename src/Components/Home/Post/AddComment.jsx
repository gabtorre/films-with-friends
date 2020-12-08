import { firestore } from '../../../firebase.js';
import { useState } from 'react';
import { CommentDiv, CommentForm, CommentInput, CommentWrapper } from '../../StyledComponents';
import { Button } from 'react-bootstrap';
import Avatar from "react-avatar";
import firebase from "firebase/app";

const AddComment = (props) => {

    const [comment, setComment] = useState('');

    const auth = firebase.auth();

    const handleCommentSubmission = async (e) => {
        e.preventDefault();

        async function addComment() {
            let newComment = {
                content: comment,
                post: props.id,
                timestamp: Date.now(),
            }
            await firestore.collection('comments')
            .add(newComment)
            .catch(err => {
                console.error('error adding comment: ', err)
            })
            setComment("")
        }
        addComment()
    }

    return (
        <CommentDiv>
            <CommentWrapper>
                <div style={{marginRight:"5%"}}>
                    <Avatar src={auth.currentUser.photoURL} round={true} size="30"/>
                </div>
                <CommentForm onSubmit={handleCommentSubmission}>
                    <CommentInput
                        id="comment"
                        label="Add Comment"
                        name="name"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button variant="danger" type="submit">Post</Button>
                </CommentForm>
            </CommentWrapper>
        </CommentDiv>
    );
}

export default AddComment;
