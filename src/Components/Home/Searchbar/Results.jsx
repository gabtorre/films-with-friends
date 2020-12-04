import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {CardWrapper, MovieCardWrapper} from '../../StyledComponents'

function Results (props) {

    return (
        <div>
            {props.data && props.data.map(result => <ResultCard key={result.id} data={result}/>)}
        </div>
    )
}

function ResultCard(props) {
    const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`
    return (
        // <p>{props.data.id}: {props.data.original_title} - {props.data.release_date}</p>
        <Card style={{ width: '100%', marginBottom: '5%'}} id="admin-card">
            <CardWrapper>
                <MovieCardWrapper>
                    <div>
                        <img src={imgurl} style={{width: '300px', padding: '1%'}}/>
                        <Button variant="danger" style={{width: '300px'}}>+ watchlist</Button>
                    </div>
                    <div style={{padding: '1%', textAlign: 'left'}}>
                        <h4>{props.data.original_title}</h4>
                        <h6>{props.data.release_date}</h6>
                        <p>Overview: {props.data.overview}</p>
                        <p>Rating: {props.data.vote_average}</p>
                    </div>
                </MovieCardWrapper>
            </CardWrapper>
        </Card>
    )
}


export default Results;
