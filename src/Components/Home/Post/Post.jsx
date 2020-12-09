import { useState, useEffect } from 'react';
import { firestore } from '../../../firebase';
import Comment from './Comment';
import AddComment from './AddComment';
import Follow from '../../Follow/Follow';
import {ActivityCardWrapper, ActivityMovieCardWrapper, ActivityCardUserWrapper, MovieCardWrapper, CommentDiv} from '../../StyledComponents'
import {Card} from 'react-bootstrap'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import '../../../../src/custom.scss';
import Avatar from "react-avatar";
import React from 'react'
import {ReactComponent as AddIcon} from '../../../Icons/Add.svg';
import {ReactComponent as ChatIcon} from '../../../Icons/Chat.svg';
import {ReactComponent as FavoriteIcon} from '../../../Icons/Favorite.svg';

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
        <>
            {/* <Follow style={{marginRight: "5%", padding: "5%"}} owner={props.uid}/> */}
            <div className="post__owner">
                <Avatar className="post__owner-img" src={
                      props.photoURL ||
                      "https://i.ibb.co/cJ6G9Vc/image.png"
                    } name={props.username} round={true} size="45"/>
                <div className="post__owner-text">
                    <div className="post__owner-text__name">{props.username}</div>
                    <div className="post__owner-text__label">recommended</div>
                </div>
            </div>
            <p className="post__caption mt-3">{props.text}</p>
            <MovieCardWrapper>
                <div className="mr-4">
                    <img className="round-border" src={`https://image.tmdb.org/t/p/w500/${props.image}`} style={{width: '150px', objectFit: 'cover'}}/>
                </div>
                <div className="post__movie">
                    <h4 className="post__movie-title">
                        {props.title}
                        <span className="post__movie-title-date">
                             ({props.release})</span></h4>
                    <div className="post__movie-text">{props.synopsis}</div>
                    <AddIcon className="post__icons"/><ChatIcon className="post__icons"/><FavoriteIcon className="post__icons"/>
                </div>
            </MovieCardWrapper>
            <>
                {comments && comments.map(comment =>
                <Comment key={comment.id} id={comment.id} content={comment.content} photoURL={comment.photoURL} data={comment} />
                )}
            </>
            <div className="mt-4">
                <AddComment id={props.id} />
            </div>
        </>
    );
}

export default Post;
