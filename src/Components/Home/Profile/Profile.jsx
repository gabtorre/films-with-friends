import { WatchList } from '../Profile/Watchlist';
import { WatchedList } from '../Profile/WatchedList';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const Profile = (props) => {

    const WatchWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    `

    return (
        <WatchWrapper>
            <Container fluid>
            <WatchList user={props.uid}/>
            <WatchedList user={props.uid}/>
            </Container>
        </WatchWrapper>
    );
}

export default Profile;
