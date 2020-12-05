import React from "react";
import '../App.css';
import Menu from '../Components/Menu'
import {BlackContainer, HomeContainer, HomeWrapper, PostWrapper} from '../Components/StyledComponents'
import Main from '../Components/Home/Main'
import {WatchList, WatchedList} from '../Components/Home/Watchlist'
import AddPost from '../Components/Home/AddPost'
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
            <Menu/>
            <BlackContainer>
                <HomeContainer>
                    { this.state.uid ? <HomeWrapper><WatchList uid={this.state.uid}/><WatchedList uid={this.state.uid}/></HomeWrapper> : <HomeWrapper><h3>loading...</h3></HomeWrapper>}
                    <PostWrapper><Main/></PostWrapper>
                    {/* <HomeWrapper><AddPost/></HomeWrapper> */}
                </HomeContainer>
            </BlackContainer>
            </>
        );
    }
}

export default Home;
