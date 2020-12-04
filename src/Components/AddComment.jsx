import { firestore } from '../firebase.js';
import { useState } from 'react';

const AddComment = (props) => {

    const [comment, setComment] = useState('');

    const handleCommentSubmission = async (e) => {
        e.preventDefault();

        async function addComment() {
            let newComment = {
                content: comment,
                post: props.id,
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
        <>
        <form onSubmit={handleCommentSubmission}>
            <input
                id="comment"
                label="Add Comment"
                name="name"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                type="submit"
            > Add Comment</button>
        </form>
        </>
    );
}
 
export default AddComment;