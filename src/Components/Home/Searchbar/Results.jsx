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
    console.log(props)
    return (
        <p>{props.data.id}: {props.data.original_title} - {props.data.release_date}</p>
        // <Card style={{ width: '100%', marginBottom: '5%'}} id="admin-card">
        //     <CardWrapper>
        //             <h4>{props.data.id}: {props.data.original_title} - {props.data.release_date}</h4>
        //             <p>{props.data.overview}</p>
        //             <p>{props.data.vote_average}</p>
        //     </CardWrapper>
        // </Card>
    )
}


export default Results;
