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
            photoURL: user.photoURL
          }, { merge: true }
        );
      } else {
        this.setState({ uid: null, signedin: false });
      }
    });
  }

  pageSwitcher = (now) => {
    this.setState({
      page: now,
    });
  };

  findProfile = (id) => {
    this.setState({
      profileuid: id,
    });
  };

  render() {
    return (
      <>
        {this.state.signedin ? (
          <BlackContainer>
            <ToastContainer />
            <HomeContainer>
              {this.state.uid ? (
                <>
                  <div style={{ backgroundColor: "#0F121D" }}>
                    <ProfileBar pageSwitcher={this.pageSwitcher} />
                  </div>
                  {this.state.page == "home" && <Main />}
                  {this.state.page == "edit" && (
                    <EditProfile uid={this.state.uid} />
                  )}
                  {this.state.page == "profile" && (
                    <Profile uid={this.state.uid} />
                  )}
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
