import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {MovieResultText, MovieCardWrapper} from '../../StyledComponents'
import SbShareMovie from './SbShareMovie';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";



function Results(props) {
    console.log(props)
    const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`

    const firestore = firebase.firestore();
    const watchlists = firestore.collection('watchlist');
    const userratings = firestore.collection('userratings');
    const watched = firestore.collection('watched');
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const uid = auth.currentUser.uid

    const [rating, setRating] = useState(0);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await watchlists.add({
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            poster: imgurl,
            uid,
        });
    }

    const handleWatched = async(e) => {
        e.preventDefault();
        await watched.add({
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            poster: imgurl,
            uid,
        });
    }

    const ratingChanged = (newRating) => {
            setRating(newRating)
            userratings.add({
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            rating: newRating,
            uid,
        });
      };

    return (
        <MovieCardWrapper style={{justifyContent: "center", textAlign: "left", width: "200px", overflowWrap: "break-word", marginTop: "5%"}} >
            <div style={{textAlign: "left", width: "200px", overflowWrap: "break-word", marginTop: "5%"}}>
            <Form onClick={handleWatched}><Button type="submit" variant="danger" style={{width: '100%'}}>+ watched</Button></Form>
                { props.data.poster_path!=null ? <img src={imgurl} style={{width: '200px', padding: '1%'}}></img> : <img src='https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' style={{width: '300px', padding: '1%', height: '400px', objectFit: 'cover'}}></img>}
                    <Form onClick={handleSubmit}><Button type="submit" variant="danger" style={{width: '100%'}}>+ watchlist</Button></Form>
                    <MovieResultText><b>{props.data.original_title}</b></MovieResultText>
                    <MovieResultText><small><b>Release Date: </b>{props.data.release_date}</small></MovieResultText>
                <MovieResultText>
                     <small><b>Overview: </b>{props.data.overview}</small>
                </MovieResultText>
                <MovieResultText><small><b>Average Rating: </b>{props.data.vote_average/2}/5</small></MovieResultText>
                <div style={{display: "inline-block"}}>
                    <small>:Your Rating</small>
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    // value={}
                    isHalf={true}
                    activeColor="#ffd700"/>
                </div>
                <SbShareMovie
                    poster={props.data.poster_path}
                    title={props.data.original_title}
                    release={props.data.release_date}
                    synopsis={props.data.overview}
                    id={props.data.id}
                    rating={rating}
                />
            </div>
        </MovieCardWrapper>
    )
}


export default Results;
