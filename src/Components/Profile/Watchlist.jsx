import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

export const WatchList = (props) => {

    const MoviePoster = styled.img`
    width: 150px;
    border-radius: 10%;
    `
    const MovieTitle = styled.p`
    text-align: center;
    font-weight: 700;
    line-height: 1em;
    padding: 10px 0;
    `
    const ListContainer = styled.div`
    height: 22.7em;
    `
    const ParentDiv = styled.div`
    width: 50em;
    height: 100%;
    `
    const ChildDiv = styled.div`
    width: 150px;
    height: 100%;
    margin: 10px;
    `
    
    const firestore = firebase.firestore();
    const list = firestore.collection('watchlist').where('uid', '==', props.user)
    const [ userwatchlist ] = useCollectionData(list, {id: 'id'});

    return (
        <ListContainer>
            <h1 className="mt-5 mb-4 bold">Watch List</h1>
            <ParentDiv>
                <HorizontalScroll>
                    {userwatchlist && userwatchlist.map(movie =>
                    <ChildDiv>
                        <MoviePoster variant="top" src={movie.poster} />
                        <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
                    </ChildDiv>
                    )}
                </HorizontalScroll>
            </ParentDiv>
        </ListContainer>
    );
}