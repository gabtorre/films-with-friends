import { firestore } from '../firebase.js';
import { useState } from 'react';
import { CommentDiv, CommentForm, CommentInput } from '../Components/StyledComponents';
import { Button } from 'react-bootstrap';

const AddComment = (props) => {

    const [comment, setComment] = useState('');

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
        <CommentForm onSubmit={handleCommentSubmission}>
            <CommentInput
                id="comment"
                label="Add Comment"
                name="name"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="link" type="submit">Add Comment</Button>
        </CommentForm>
        </CommentDiv>
    );
}
 
export default AddComment;