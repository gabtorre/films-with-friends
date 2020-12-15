import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ScrollHorizontal from 'react-scroll-horizontal';
import {MoviePoster, MovieTitle, ChildDiv, Placeholder} from '../../../Components/StyledComponents';
import ReactStars from "react-rating-stars-component";
import WatchButton from '../Post/WatchButton';
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
                <div className="movie__container">
                    <img className="movie__poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)}/>
                    <div className="movie__overlay">
                    <WatchButton key={movie.id} id={movie.movieid} title={movie.title}
                    release={movie.date} poster={movie.poster} />
                    <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
                    release={movie.date} poster={movie.poster} list={'watched'} rating={movie.rating}/>
                    </div>
                    <div className="mt-2" style={{textAlign: 'center', width: '100%', marginLeft: '25%'}}>
                    <ReactStars
                        // onChange={updateRating}
                        className="mx-auto"
                        key={movie.id}
                        count={5}
                        size={15}
                        value={movie.rating}
                        activeColor="#F67553"
                        />
                    </div>
                </div>
                <MovieTitle className="mt-2" key={movie.id}>{movie.title}</MovieTitle>
            </ChildDiv>
            )}
            </ScrollHorizontal>

            : userdata && userdata.watched.length > 0 ?
            <ScrollHorizontal config= {{ stiffness: 0, damping: 0 }}>
            {userdata.watched.map(movie =>
            <Placeholder>
                <div className="movie__container">
                    <img className="movie__poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)}/>
                    <div className="movie__overlay">
                    <WatchButton key={movie.id} id={movie.movieid} title={movie.title}
                    release={movie.date} poster={movie.poster} />
                    <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
                    release={movie.date} poster={movie.poster} list={'watched'} rating={movie.rating}/>
                    </div>
                    <div style={{textAlign: 'center', width: '100%', marginLeft: '25%'}}>
                    <ReactStars
                        // onChange={updateRating}
                        className="mx-auto"
                        key={movie.id}
                        count={5}
                        size={15}
                        value={movie.rating}
                        activeColor="#F67553"
                        />
                    </div>
                </div>
                <MovieTitle className="mt-2" key={movie.id}>{movie.title}</MovieTitle>
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
