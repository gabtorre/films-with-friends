import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Landing from "../Pages/Landing";
import Home from "../Pages/Home";
// import Posts from "../Pages/Posts";
import Profile from "../Pages/Profile";
import firebase from "firebase/app";
import "firebase/auth";

class Routes extends React.Component {
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
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={Signup} exact />
        { this.state.uid && (
          <Switch>
            <Route path="/home" component={Home} exact />
            {/* <Route path="/posts" component={Posts} exact /> */}
            <Route path="/profile/:id" component={Profile} exact />
          </Switch>
        )}
        {/* <Route path="*" render={() => <h1>404 Not Found</h1>} /> */}
      </Switch>
    );
  }
}

export default Routes;
