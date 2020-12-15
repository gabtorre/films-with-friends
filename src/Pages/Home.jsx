import React from "react";
import "../App.css";
import {
  BlackContainer,
  HomeContainer,
  HomeRightWrapper,
} from "../Components/StyledComponents";
import Main from "../Components/Home/Main";
import ProfileBar from "../Components/Home/ProfileBar";
import MovieBar from "../Components/Home/MovieBar";
import EditProfile from "../Components/Home/Profile/EditProfile";
import Profile from "../Components/Home/Profile/Profile";
import { Redirect, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FriendList from "../Components/Home/Profile/FriendList";

class Home extends React.Component {
  state = {
    loaded: false,
    uid: null,
    signedin: true,
    page: "home",
    profileuid: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async(user) => {
      if (user) {
        const uid = user.uid;
        this.setState({ uid: uid });
        const usersRef = await firebase.firestore().collection('users').doc(uid)
        await usersRef.set(
          {
            displayName: user.displayName,
            photoURL: user.photoURL,
            watchlist: firebase.firestore.FieldValue.arrayUnion(),
            watched: firebase.firestore.FieldValue.arrayUnion(),
          }, { merge: true }
        );
      } else {
        this.setState({ uid: null, signedin: false });
      }
    });
  }

  pageSwitcher = (page, uid) => {

    this.setState({
      page: page,
      profileuid: uid
    });

  };

  findProfile = (id) => {
    this.setState({
      profileuid: id,
      page: "profile",
    });
  };

  render() {
    // console.log(this.state.profileuid)
    return (
      <>
        {this.state.signedin ? (
          <BlackContainer>
            <ToastContainer />
            <HomeContainer>
              {this.state.uid ? (
                <>
                  <div style={{ backgroundColor: "#0F121D" }}>
                    <ProfileBar pageSwitcher={this.pageSwitcher} uid={this.state.uid} />
                  </div>
                  {this.state.page == "home" && <Main findProfile={this.findProfile} />}
                  {this.state.page == "edit" && (
                    <EditProfile uid={this.state.uid} />
                  )}
                   {this.state.page == "friendlist" && (
                    <FriendList uid={this.state.uid} findProfile={this.findProfile}/>
                  )}
                  {this.state.page == "profile" && this.state.profileuid && (<Profile uid={this.state.profileuid} />)}
                  <div style={{ backgroundColor: "#0F121D" }}>
                    <MovieBar uid={this.state.uid} findProfile={this.findProfile} />
                  </div>
                </>
              ) : (
                <HomeRightWrapper>
                  <h3>loading...</h3>
                </HomeRightWrapper>
              )}
            </HomeContainer>
          </BlackContainer>
        ) : (
          <Redirect to="./signin" />
        )}
      </>
    );
  }
}

export default Home;
