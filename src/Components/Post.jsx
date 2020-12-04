import { useState, useEffect } from 'react';
import { firestore } from '../firebase.js';
import Comment from '../Components/Comment';
import AddComment from '../Components/AddComment';
import {CardWrapper} from '../Components/StyledComponents'
import {Card} from 'react-bootstrap'

const Post = (props) => {

    const[comments, getComments] = useState(null);

    useEffect( () => {
        async function fetchData() {
            await firestore.collection('comments').where('post', '==', props.id).orderBy('timestamp')
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
        <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <Card.Text><h1>{props.text}</h1></Card.Text>
            <Card.Text><h1>{props.title}</h1></Card.Text>
            <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} />
            {comments && comments.map(comment =>
            <Comment key={comment.id} id={comment.id} content={comment.content} />
            )}
            <AddComment id={props.id} />
        </CardWrapper>
        </Card>
        </>
    );
}

export default Post;
