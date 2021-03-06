import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import {
  AuthContainer,
  FormWrap,
  FormContent,
  FormLeft,
  Form,
  FormInput,
  FormButton,
  Text,
  TitleWrapper,
} from "../Components/StyledComponents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FB_APIKey,
    authDomain: process.env.REACT_APP_FB_AUTHD,
    projectId: process.env.REACT_APP_FB_PID,
    storageBucket: process.env.REACT_APP_FB_SB,
    messagingSenderId: process.env.REACT_APP_FB_MSID,
    appId: process.env.REACT_APP_FB_APPID,
  });
}

const Signin = () => {
  const history = useHistory();

  const storage = firebase.storage();

  const [formData, setFormData] = useState({
    username: "Movie Star",
    email: "",
    password: "",
    photoURL: "https://i.ibb.co/cJ6G9Vc/image.png",
    signedup: false,
  });

  const { email, password, username, photoURL, signedup } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const [imageAsFile, setImageAsFile] = useState("");

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    let newUser = firebase.auth().currentUser;
    await firebase
      .storage()
      .ref(`/users/${newUser.uid}/${imageAsFile.name}`)
      .put(imageAsFile)
      .on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the upload process
          //   console.log(snapShot)
        },
        (err) => {
          //catches the errors
          toast.error(err);
        },
        async () => {
          // gets the functions from storage referencing the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the photoURL key before we update profile with it
          await storage
            .ref(`/users/${newUser.uid}/`)
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setFormData((prevObject) => ({
                ...prevObject,
                photoURL: fireBaseUrl,
              }));
              newUser.updateProfile({
                displayName: username,
                photoURL: fireBaseUrl,
              });
            });
        }
      );
    await newUser
      .updateProfile({ displayName: username, photoURL: photoURL })
      .then(async (user) => {
        setFormData({ signedup: true });
        toast.success(`Welcome to our Movie community!`);
        history.push("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.error(errorCode + errorMessage);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        toast.error(errorCode + errorMessage);
        toast.error(email + credential);
      });
  };

  return (
    <>
      {signedup ? <Redirect to="/" /> : null}
      <AuthContainer>
        <ToastContainer />
        <FormWrap>
          {/* <FormContent>
                        <FormLeft>
                        <TitleWrapper>Movie</TitleWrapper>
                        <TitleWrapper>Share Comments</TitleWrapper>
                        </FormLeft>
                    </FormContent> */}
          <FormContent>
            <Form onSubmit={handleSubmit} id="signup">
              <TitleWrapper>Create an account</TitleWrapper>
              <FormInput
                type="text"
                name="displayName"
                placeholder="Username"
                onChange={handleChange("username")}
                required
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange("email")}
                required
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                required
              />
              <FormInput
                type="file"
                placeholder="Profile Picture"
                onChange={handleImageAsFile}
              />
              <FormButton
                type="submit"
                style={{ backgroundColor: "#E50914" }}
                form="signup"
              >
                Sign up
              </FormButton>
              <Text> Or Sign in / Sign up with Google </Text>
              <FormButton
                onClick={signInWithGoogle}
                style={{ backgroundColor: "#B81D24" }}
              >
                Google
              </FormButton>
              <small>
                By signing up, you agree to our{" "}
                <NavLink to="#"> Terms and Conditions</NavLink>.
              </small>
            </Form>
          </FormContent>
        </FormWrap>
      </AuthContainer>
    </>
  );
};

export default Signin;
