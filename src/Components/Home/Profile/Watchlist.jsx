import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';
import Row from 'react-bootstrap/Row';
import ScrollHorizontal from 'react-scroll-horizontal';
import {MoviePoster, MovieTitle, ChildDiv} from '../../../Components/StyledComponents';

export const WatchList = (props) => {
    
    const firestore = firebase.firestore();
    const list = firestore.collection('watchlist').where('uid', '==', props.user)
    const [ userwatchlist ] = useCollectionData(list, {id: 'id'});

    return (
        <> 
        <h1 className="mt-5 mb-4 bold">Watched List</h1>
        <div style={{ height: `22.7em` }}>
            <ScrollHorizontal>
                {userwatchlist && userwatchlist.map(movie =>
                <ChildDiv>
                    <MoviePoster variant="top" src={movie.poster} />
                    <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
                </ChildDiv>
                )}
            </ScrollHorizontal>
        </div>
        </>
    );
}