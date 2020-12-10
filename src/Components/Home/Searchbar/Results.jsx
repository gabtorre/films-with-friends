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
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const uid = auth.currentUser.uid

    const [rating, setRating] = useState(0);

    const addWatchList = async(e) => {
        const uid = auth.currentUser.uid
        const usersRef = firestore.collection('users').doc(uid);
        e.preventDefault();
        const toWatchMovieDetail = {
            movieid: props.data.id,
            title: props.data.original_title,
            date: props.data.release_date,
            poster: imgurl,
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
            poster: imgurl,
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
        <MovieCardWrapper style={{justifyContent: "center", textAlign: "left", width: "200px", overflowWrap: "break-word", marginTop: "5%"}} >
            <div style={{textAlign: "left", width: "200px", overflowWrap: "break-word", marginTop: "5%"}}>
            <Form onClick={addWatched}><Button type="submit" variant="danger" style={{width: '100%'}}>+ watched</Button></Form>
                { props.data.poster_path!=null ? <img src={imgurl} style={{width: '200px', padding: '1%'}}></img> : <img src='https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' style={{width: '300px', padding: '1%', height: '400px', objectFit: 'cover'}}></img>}
                    <Form onClick={addWatchList}><Button type="submit" variant="danger" style={{width: '100%'}}>+ watchlist</Button></Form>
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
                    imgurl={imgurl}
                />
            </div>
        </MovieCardWrapper>
    )
}


export default Results;
