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
import { Redirect, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = firebase.auth();

class Home extends React.Component {
  state = {
    loaded: false,
    uid: null,
    signedin: true,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        this.setState({ uid: uid });
      } else {
        this.setState({ uid: null, signedin: false });
      }
    });
  }

  render() {
    return (
      <>
        {this.state.signedin ? (
          <BlackContainer>
              <ToastContainer />
            <HomeContainer>
              {this.state.uid ? (
                <div style={{ backgroundColor: "#0F121D" }}>
                  <ProfileBar />
                </div>
              ) : (
                <HomeRightWrapper>
                  <h3>loading...</h3>
                </HomeRightWrapper>
              )}
              <Main />
              <div style={{ backgroundColor: "#0F121D" }}>
                <MovieBar />
              </div>
            </HomeContainer>
          </BlackContainer>
        ) : (
          <Redirect to="./signin"/>
        )}
      </>
    );
  }
}

export default Home;
