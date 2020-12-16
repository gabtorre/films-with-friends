import { WatchList } from '../Profile/Watchlist';
import { WatchedList } from '../Profile/WatchedList';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const Profile = (props) => {

    const WatchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    
    `

    // style={{width: '50%', minWidth: '600px' , marginLeft: 'auto', marginRight: 'auto'}}
    return (
        <WatchWrapper className="scrollable-div">
            <Container fluid style={{width: '50%', minWidth: '600px'}}>
            <WatchList user={props.uid}/>
            <WatchedList user={props.uid}/>
            </Container>
        </WatchWrapper>
    );
}

export default Profile;
