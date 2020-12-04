import { useState, useEffect } from 'react';
import { firestore } from '../firebase.js';
import Comment from '../Components/Comment';

const Post = (props) => {

    const[comments, getComments] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const snapshot = await firestore.collection('comments').where('post', '==', props.id).get();
            const comments = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            getComments(comments)
            console.log(comments)
        }
        fetchData();
    }, [])

    return (
        <>
        <h1>{props.text}</h1>
        {comments && comments.map(comment => <Comment key={comment.id} id={comment.id} content={comment.content} />)}
        </>
    );
}
 
export default Post;