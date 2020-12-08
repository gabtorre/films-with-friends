import { useState, useEffect } from 'react';
import { firestore } from '../../../firebase';
import Comment from './Comment';
import AddComment from './AddComment';
import Follow from '../../Follow/Follow';
import {CardWrapper, MovieCardWrapper} from '../../StyledComponents'
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
                // console.log(posts)
            })
            // .get();
            // const comments = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            // getComments(comments)
        }
        fetchData();
    }, [])

    // console.log(props)

    return (
        <>
        <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <MovieCardWrapper>
                <div>
                    <p>{props.uid} Shared a movie</p>
                    <Follow owner={props.uid}/>
                    <Card.Text>{props.title}</Card.Text>
                    <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} style={{height: '200px', width: '200px', objectFit: 'cover'}}/>
                </div>
                <div style={{padding: '2%', width: '100%', marginLeft: '2%'}}>
                    <Card.Text><p>{props.text}</p></Card.Text>
                    <Card.Text><p>{props.synopsis}</p></Card.Text>
                    {comments && comments.map(comment =>
                    <Comment key={comment.id} id={comment.id} content={comment.content} />
                    )}
                    <AddComment id={props.id} />
                </div>
            </MovieCardWrapper>
        </CardWrapper>
        </Card>
        </>
    );
}

export default Post;
