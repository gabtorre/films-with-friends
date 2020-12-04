import React from 'react'
import Card from 'react-bootstrap/Card'
import {CardWrapper} from '../../StyledComponents'

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
                    <img src={imgurl} />
                    <h4>{props.data.id}: {props.data.original_title} - {props.data.release_date}</h4>
                    <p>Overview: {props.data.overview}</p>
                    <p>Rating: {props.data.vote_average}</p>
            </CardWrapper>
        </Card>
    )
}


export default Results;
