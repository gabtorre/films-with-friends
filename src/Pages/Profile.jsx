import firebase from 'firebase/app';
import { WatchList } from '../Components/Profile/Watchlist';
import { WatchedList } from '../Components/Profile/WatchedList';


const Profile = (props) => {

    return ( 
        <> 
        <WatchList user={props.match.params.id}/>
        <WatchedList user={props.match.params.id}/>
        </>
    );
}
 
export default Profile;