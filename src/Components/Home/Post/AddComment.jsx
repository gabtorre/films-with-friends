import { firestore } from '../../../firebase.js';
import { useState } from 'react';
import { CommentDiv, CommentForm, CommentInput, CommentWrapper } from '../../StyledComponents';
import { Button, Form } from 'react-bootstrap';
import Avatar from "react-avatar";
import firebase from "firebase/app";
import './Post.css'

const AddComment = (props) => {

    const [comment, setComment] = useState('');

    const auth = firebase.auth();

    const handleCommentSubmission = async (e) => {
        e.preventDefault();

        async function addComment() {
            let newComment = {
                content: comment,
                post: props.id,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                username: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                uid: auth.currentUser.uid
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
        <CommentForm onSubmit={handleCommentSubmission}>
            <Avatar className="mr-3" src={
                      auth.currentUser.photoURL ||
                      "https://i.ibb.co/cJ6G9Vc/image.png"
                    } round={true} size="45"/>
            <input
                type="text"
                id="comment"
                className="comment-input"
                placeholder='Add a comment...'
                label="Add Comment"
                name="name"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required="true"
            />
            <button className="post__comment-button" type="submit">Post</button>
        </CommentForm>
    );
}

export default AddComment;
