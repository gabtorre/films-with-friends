import { WatchList } from '../Profile/Watchlist';
import { WatchedList } from '../Profile/WatchedList';
import { ActivityPostsWrapper }  from '../../StyledComponents'

const Profile = (props) => {

    return (
        <ActivityPostsWrapper>
            <WatchList user={props.uid}/>
            <WatchedList user={props.uid}/>
        </ActivityPostsWrapper>
    );
}

export default Profile;
