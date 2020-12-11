import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ScrollHorizontal from 'react-scroll-horizontal';
import {MoviePoster, MovieTitle, ChildDiv} from '../../../Components/StyledComponents';

export const WatchList = (props) => {

    const firestore = firebase.firestore();

    const [userdata, loading, error] = useDocumentData(
        firestore.doc('users/' + props.user)
    );

    return (
        <>
        <h1 className="mt-5 mb-4 bold">Watch List</h1>
        <div style={{ height: `22.7em` }}>
            <ScrollHorizontal>
                {userdata && userdata.watchlist.map(movie =>
                <ChildDiv>
                    {movie.poster? <MoviePoster variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} /> : <MoviePoster variant="top" src="https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg" />}
                    <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
                </ChildDiv>
                )}
            </ScrollHorizontal>
        </div>
        </>
    );
}
