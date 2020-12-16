import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Avatar from "react-avatar";
import {
  MovieSuggestionTitle,
  MovieSuggestionDate,
  MovieSideBarSuggestion,
  MovieSideBarRedBtn,
  MovieSideBarShareBtn,
} from "../../StyledComponents";
import ReactStars from "react-rating-stars-component";
import Results from "./Results";
import { RiShareForwardFill, RiAddLine } from "react-icons/ri";
import "./Searchbar.css";
import WatchButton from "../Post/WatchButton";

export const Suggestion = (props) => {
  const [finalResult, setFinalResult] = useState("");

  return (
    <>
      {!finalResult ? (
        <div>
          {props.data &&
            props.data.map((result) => (
              <SuggestionCard
                key={result.id}
                data={result}
                setFinalResult={setFinalResult}
                handleResult={props.handleResult}
                search={props.searched}
              />
            ))}
        </div>
      ) : (
        <Results data={finalResult} />
      )}
    </>
  );

  function SuggestionCard(props) {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const uid = auth.currentUser.uid;

    const [rating, setRating] = useState(props.data.vote_average / 2);

    const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
    const noimg =
      "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

    const handleSharePost = (e) => {
      e.preventDefault();
      props.setFinalResult(props.data);
    };

    const submitRating = async (newRating) => {
      const usersRef = await firestore.collection("users").doc(uid);
      const addtoWatchedList = {
        movieid: props.data.id,
        title: props.data.original_title,
        date: props.data.release_date,
        poster: props.data.poster_path,
        rating: newRating,
      };
      await usersRef.update({
        watched: firebase.firestore.FieldValue.arrayUnion(addtoWatchedList),
      });
  }


    return (
      <MovieSideBarSuggestion>
        <div className="sidebar__movie-info">
          <div>
            {props.data.poster_path ? (
              <img src={imgurl} className="sidebar__img" />
            ) : (
              <img src={noimg} className="sidebar__img" />
            )}
          </div>
          <div className="sidebar__movie-info__text">
            <MovieSuggestionTitle>
              {props.data.original_title}
            </MovieSuggestionTitle>{" "}
            {props.data.release_date ? (
              <MovieSuggestionDate>
                {props.data.release_date}
              </MovieSuggestionDate>
            ) : null}
            <div className="sidebar__movie-info__stars">
              <ReactStars
                onChange={submitRating}
                count={5}
                size={15}
                value={props.data.vote_average / 2}
                activeColor="#F67553"
              />
              
            </div>
            <div>
            <MovieSideBarShareBtn onClick={handleSharePost}>
            share
            <RiShareForwardFill />
            </MovieSideBarShareBtn>
            <WatchButton
              key={props.data.id}
              id={props.data.id}
              title={props.data.original_title}
              release={props.data.release_date}
              poster={props.data.poster_path}
            />
            </div>
          </div>
        </div>
        <div>
        </div>
      </MovieSideBarSuggestion>
    );
  }
};

export const UserSuggestion = (props) => {
  const [notClicked, setnotClicked] = useState(true);

  return (
    <>
      <div>
        {props.data &&
          props.data.map((result) => (
            // console.log(result)
            <UserSuggestionCard
              key={result.uid}
              data={result}
              findProfile={props.findProfile}
              setnotClicked={setnotClicked}
            />
          ))}
      </div>
    </>
  );

  function UserSuggestionCard(props) {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const uid = auth.currentUser.uid;

    const handleFollow = async (e) => {
      props.setnotClicked(false);
      const usersRef = await firebase.firestore().collection("users").doc(uid);
      await usersRef.update({
        friendlist: firebase.firestore.FieldValue.arrayUnion(props.data.uid),
      });
      props.setnotClicked(true);
    };

    return (
      <MovieSideBarSuggestion>
        <div
          className="sidebar__movie-info"
          onClick={() => props.findProfile(props.data.uid)}
        >
          <Avatar
            src={props.data.photoURL}
            size={60}
            round={true}
            style={{ marginRight: "15px" }}
          />
          <div className="sidebar__movie-info__text">
            <MovieSuggestionTitle style={{ marginTop: "10%" }}>
              {props.data.displayName}@
            </MovieSuggestionTitle>
            <div style={{ marginTop: "10%" }}>
              {notClicked && props.data.followed ? (
                <MovieSideBarRedBtn onClick={handleFollow} width={70}>
                  follow <RiAddLine />
                </MovieSideBarRedBtn>
              ) : (
                <MovieSideBarRedBtn width={70}>followed</MovieSideBarRedBtn>
              )}
            </div>
          </div>
        </div>
      </MovieSideBarSuggestion>
    );
  }
};
