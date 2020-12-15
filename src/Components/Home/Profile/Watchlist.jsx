import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ScrollHorizontal from 'react-scroll-horizontal';
import {MoviePoster, MovieTitle, ChildDiv, Placeholder, MovieContainer, MovieOverlay} from '../../../Components/StyledComponents';
import WatchButton from '../Post/WatchButton';
import MoveButton from '../Post/MoveButton';
import DeleteButton from '../Post/DeleteButton';

export const WatchList = (props) => {

    const firestore = firebase.firestore();

    const [userdata, loading, error] = useDocumentData(
        firestore.doc('users/' + props.user)
    );

    return (
        <>
        {userdata && (<h1 className="mt-5 mb-4 bold">{userdata.displayName}'s Watch List</h1>)}
        <div style={{ height: `22.7em` }}>
        {userdata && userdata.watchlist.length > 3  ?

        <ScrollHorizontal>
         {userdata.watchlist.map(movie =>
         <ChildDiv>
             <div className="movie__container">
             <img className="movie__poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)}/>
             <div className="movie__overlay">
             <WatchButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster} />
            <MoveButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster}/>
            <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster} list={'watchlist'}/>
            </div>
            </div>
             <MovieTitle className="mt-2" key={movie.id}>{movie.title}</MovieTitle>
         </ChildDiv>
         )}
        </ScrollHorizontal>

        : userdata && userdata.watchlist.length > 0 ?
        <ScrollHorizontal config= {{ stiffness: 0, damping: 0 }}>
         {userdata.watchlist.map(movie =>
         <Placeholder>
            <div className="movie__container">
             <img className="movie__poster" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} onClick={()=> window.open(`https://www.themoviedb.org/movie/${movie.movieid}`)}/>
             <div className="movie__overlay">
             <WatchButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster} />
            <MoveButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster}/>
            <DeleteButton key={movie.id} id={movie.movieid} title={movie.title}
            release={movie.date} poster={movie.poster} list={'watchlist'}/>
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
}
