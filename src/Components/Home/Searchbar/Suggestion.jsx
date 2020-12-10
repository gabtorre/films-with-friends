import React, {useState} from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Results from "./Results"

export default function Suggestion(props) {

    const [finalResult, setFinalResult] = useState("");

    return (
        <>
            { !finalResult?
            <div>
                {props.data && props.data.map(result => <SuggestionCard key={result.id} data={result} setFinalResult={setFinalResult} handleResult={props.handleResult} search={props.searched} /> )}
            </div>
            : <Results data={finalResult} /> }
        </>
    )

}

function SuggestionCard(props) {

    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const handleClick = (e) => {
        e.preventDefault();
        props.setFinalResult(props.data)
    }


    return (
        <div onClick={handleClick}>
            <span>{props.data.original_title}</span> { props.data.release_date ? <span>- {props.data.release_date}</span> : null }
        </div>
    )
}

