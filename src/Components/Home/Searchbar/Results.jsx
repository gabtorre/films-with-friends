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
    const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`

    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const uid = auth.currentUser.uid

    const [rating, setRating] = useState(0);

    const addWatchList = async(e) => {
        const usersRef = firestore.collection('users').doc(uid);
        e.preventDefault();
        const toWatchMovieDetail = {
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            poster: props.data.poster_path,
        }
          await usersRef.update(
            {
              watchlist: firebase.firestore.FieldValue.arrayUnion(toWatchMovieDetail)
            }
          );
    }

    const addWatched = async(e) => {
        const uid = auth.currentUser.uid
        const usersRef = firestore.collection('users').doc(uid);
        e.preventDefault();
        const addtoWatchedList = {
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            poster: props.data.poster_path,
            rating: rating,
        }
          await usersRef.update(
            {
              watched: firebase.firestore.FieldValue.arrayUnion(addtoWatchedList)
            }
          );
    }

    const ratingChanged = (newRating) => {
            setRating(newRating)
        }

    return (
        <MovieCardWrapper>
            <div style={{textAlign: "left", marginTop: "5%"}}>
                { props.data.poster_path!=null ? <img src={imgurl} style={{width: '100%', padding: '1%'}}></img> : <img src='https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' style={{width: '100%', padding: '1%', height: '400px', objectFit: 'cover'}}></img>}
                    <Form onClick={addWatched}><Button type="submit" variant="danger" className="mt-2" style={{width: '100%'}}>+ watched</Button></Form>
                    <Form onClick={addWatchList}><Button type="submit" variant="danger" className="mt-2" style={{width: '100%'}}>+ watchlist</Button></Form>
                    <MovieResultText className="mt-3"><b>{props.data.original_title}</b></MovieResultText>
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
                    imgurl={imgurl}
                />
            </div>
        </MovieCardWrapper>
    )
}


export default Results;
