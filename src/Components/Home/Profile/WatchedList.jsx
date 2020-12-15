import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ScrollHorizontal from 'react-scroll-horizontal';
import {MoviePoster, MovieTitle, ChildDiv, Placeholder} from '../../../Components/StyledComponents';
import ReactStars from "react-rating-stars-component";
import DeleteButton from '../Post/DeleteButton';

export const WatchedList = (props) => {

    const firestore = firebase.firestore();

    const [userdata, loading, error] = useDocumentData(
        firestore.doc('users/' + props.user)
    );

    // const updateRating = async (newRating) => {
    //     const usersRef = await firestore.collection("users").doc(props.user);
    //     const addtoWatchedList = {
    //       movieid: props.data.id,
    //       rating: newRating,
    //     };
    //     await usersRef.set({
    //       watched: firebase.firestore.FieldValue.arrayUnion(addtoWatchedList)
    //     }, { merge: true });
    // }

    return (
        <>
            <h1 className="mb-4 bold mt-4">Watched List</h1>
            <div style={{ height: `22.7em` }}>
            {userdata && userdata.watched.length > 4  ?

            <ScrollHorizontal>
            {userdata && userdata.watched.map(movie =>
            <ChildDiv>
                <MoviePoster variant="top" onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)} src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
                release={movie.date} poster={movie.poster} list={'watched'}/>
                <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
                <ReactStars
                // onChange={updateRating}
                key={movie.id}
                count={5}
                size={15}
                value={movie.rating}
                style={{margin: "auto 0"}}
                activeColor="#F67553"
              />
            </ChildDiv>
            )}
            </ScrollHorizontal>

            : userdata && userdata.watched.length > 0 ?
            <ScrollHorizontal config= {{ stiffness: 0, damping: 0 }}>
            {userdata.watched.map(movie =>
            <Placeholder>
                <MoviePoster variant="top" onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)} src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
                release={movie.date} poster={movie.poster} list={'watched'}/>
                <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
                <ReactStars
                key={movie.id}
                count={5}
                size={15}
                value={movie.rating}
                activeColor="#F67553"
              />
            </Placeholder>
            )}
            </ScrollHorizontal>
            :
            'Add some movies to your list.'
            }
            </div>
        </>
    );
};
