import React from "react";
import '../App.css';
import Menu from '../Components/Menu'
import {BlackContainer, HomeContainer, HomeLeftWrapper, HomeRightWrapper, PostWrapper} from '../Components/StyledComponents'
import Main from '../Components/Home/Main'
import {WatchList, WatchedList} from '../Components/Home/Watchlist'
import ProfileBar from '../Components/Home/ProfileBar'
import MovieBar from '../Components/Home/MovieBar'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();

class Home extends React.Component {
    state = {
        loaded: false,
        uid: null,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              const uid = user.uid;
              this.setState({uid: uid})
            } else {
              // User is signed out
              // ...
            }
          });
        }

    render(){
        return (
            <>
            {/* <Menu/> */}
            <BlackContainer>
                <HomeContainer>
                    { this.state.uid ? <ProfileBar/> : <HomeRightWrapper><h3>loading...</h3></HomeRightWrapper>}
                    <PostWrapper><Main/></PostWrapper>
                    <MovieBar/>
                </HomeContainer>
            </BlackContainer>
            </>
        );
    }
}

export default Home;
