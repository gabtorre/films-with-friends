import { firestore } from '../../../firebase';
import { useState } from 'react';
import { CommentForm, CommentInput } from '../../StyledComponents';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';

const SbShareMovie = (props) => {

    const [text, setContent] = useState('');

    const auth = firebase.auth();
    const uid = auth.currentUser.uid


    const handleCommentSubmission = async (e) => {
        e.preventDefault();
            const newPost = {
                text: text,
                movieid: props.id,
                title: props.title,
                poster: props.poster,
                release: props.release,
                synopsis: props.synopsis,
                username: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                rating: props.rating,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
            }
            const newRating = {
                title: props.title,
                rating: props.rating,
                movieid: props.id,
                createdAt: Date.now(),
                poster: props.poster,
                release: props.release,
            }
        const usersRef = await firestore.collection('users').doc(uid);

        async function shareMovie() {
            await usersRef.update(
                {
                  ratings: firebase.firestore.FieldValue.arrayUnion(newRating)
                }
            );
            await firestore.collection('post')
            .add(newPost)
            .catch(err => {
                console.error('error adding post: ', err)
            })
            setContent("")
        }
        shareMovie()
    }

    return (
        <>
        <CommentForm id="sharePostForm" onSubmit={handleCommentSubmission}>
            <CommentInput
                id="text"
                label="Share"
                name="text"
                value={text}
                placeholder="?What do you think"
                onChange={(e) => setContent(e.target.value)}
            />
        </CommentForm>
        <Button variant="danger" form="sharePostForm" type="submit" style={{width: "100%", marginTop: "2%"}}>Share</Button>
        </>
    );
}

export default SbShareMovie;
