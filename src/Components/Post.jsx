import { useState, useEffect } from 'react';
import { firestore } from '../firebase.js';
import Comment from '../Components/Comment';
import AddComment from '../Components/AddComment';

const Post = (props) => {

    const[comments, getComments] = useState(null);

    useEffect( () => {
        async function fetchData() {
            await firestore.collection('comments').where('post', '==', props.id)
            .onSnapshot(snapshot => {
                const posts = snapshot.docs
                .map(doc => {
                  return { id: doc.id, ...doc.data() }
                })
                getComments(posts)
                console.log(posts)
            })

            // .get();
            // const comments = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            // getComments(comments)
        }
        fetchData();
    }, [])



    return (
        <>
        <h1>{props.text}</h1>
        {comments && comments.map(comment =>
        <Comment key={comment.id} id={comment.id} content={comment.content} />
        )}
        <AddComment id={props.id} />
        </>
    );
}

export default Post;
