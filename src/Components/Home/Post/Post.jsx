import { useState, useEffect } from 'react';
import { firestore } from '../../../firebase';
import Comment from './Comment';
import AddComment from './AddComment';
import Follow from '../../Follow/Follow';
import {ActivityCardWrapper, ActivityMovieCardWrapper, ActivityCardUserWrapper, MovieCardWrapper} from '../../StyledComponents'
import {Card} from 'react-bootstrap'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();

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
        <ActivityCardWrapper>
            <ActivityMovieCardWrapper>
                <ActivityCardUserWrapper>
                <Follow style={{marginRight: "5%", padding: "5%"}} owner={props.uid}/>
                <div>
                    <b>{props.uid}</b>
                    <p>Recommended</p>
                </div>
                </ActivityCardUserWrapper>
                <Card.Text><p>{props.text}</p></Card.Text>
                <MovieCardWrapper>
                    <div style={{marginRight:"5%"}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} style={{width: '150px', objectFit: 'cover'}}/>
                    </div>
                    <div>
                        <h6>{props.title}</h6>
                        <small>{props.synopsis}</small>
                    </div>
                </MovieCardWrapper>
                <div style={{padding: '2%', width: '100%', marginLeft: '2%'}}>
                    {comments && comments.map(comment =>
                    <Comment key={comment.id} id={comment.id} content={comment.content} />
                    )}
                    <AddComment id={props.id} />
                </div>
            </ActivityMovieCardWrapper>
        </ActivityCardWrapper>
    );
}

export default Post;
