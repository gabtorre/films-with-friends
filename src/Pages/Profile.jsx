import { WatchList } from '../Components/Home/Profile/Watchlist';
import { WatchedList } from '../Components/Home/Profile/WatchedList';

const Profile = (props) => {

    return (
        <>
        <WatchList user={props.match.params.id}/>
        <WatchedList user={props.match.params.id}/>
        </>
    );
}

export default Profile;
