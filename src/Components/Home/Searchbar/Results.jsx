import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {CardWrapper, MovieCardWrapper} from '../../StyledComponents'
import ShareMovie from '../ShareMovie';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Results (props) {

    return (
        <div>
            {props.data && props.data.map(result => <ResultCard key={result.id} data={result}/>)}
        </div>
    )
}

function ResultCard(props) {
    const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`

    const firestore = firebase.firestore();
    const watchlists = firestore.collection('watchlist');
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const uid = auth.currentUser.uid

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

    return (
        // <p>{props.data.id}: {props.data.original_title} - {props.data.release_date}</p>
        <Card style={{ width: '100%', marginBottom: '5%'}} id="admin-card">
            <CardWrapper>
                <MovieCardWrapper>
                    <div>
                        <img src={imgurl} style={{width: '300px', padding: '1%'}}/>
                        <Form onClick={handleSubmit}><Button type="submit" variant="danger" style={{width: '300px'}}>+ watchlist</Button></Form>
                    </div>
                    <div style={{padding: '1%', textAlign: 'left'}}>
                        <h4>{props.data.original_title}</h4>
                        <h6>{props.data.release_date}</h6>
                        <p>Overview: {props.data.overview}</p>
                        <p>Rating: {props.data.vote_average}</p>
                        <ShareMovie
                            poster={props.data.poster_path}
                            title={props.data.original_title}
                            release={props.data.release_date}
                            synopsis={props.data.overview}
                        />
                    </div>
                </MovieCardWrapper>
            </CardWrapper>
        </Card>
    )
}


export default Results;
