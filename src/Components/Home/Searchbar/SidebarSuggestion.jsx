import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Avatar from "react-avatar";
import {
  MovieSuggestionTitle,
  MovieSuggestionDate,
  MovieSideBarSuggestion,
  MovieSideBarSuggestionImg,
  MovieSideBarSuggestionCard,
  MovieSideBarSuggestionRight,
  MovieSideBarRedBtn,
  MovieSideBarShareBtn,
} from "../../StyledComponents";
import ReactStars from "react-rating-stars-component";
import Results from "./Results";
import { RiShareForwardFill, RiAddLine } from "react-icons/ri";
import { isCompositeType } from "graphql";



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
  const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`
  const noimg =
    "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

  const handleSharePost = (e) => {
    e.preventDefault();
    props.setFinalResult(props.data);
  };

  const addWatchList = async(e) => {
  const uid = auth.currentUser.uid
  const usersRef = firestore.collection('users').doc(uid);
  const img = props.data.poster_path
    e.preventDefault();
    const toWatchMovieDetail = {
      movieid: props.data.id,
      title: props.data.original_title,
      date: props.data.release_date,
      poster: props.data.poster_path
  }
    await usersRef.update(
      {
        watchlist: firebase.firestore.FieldValue.arrayUnion(toWatchMovieDetail)
      }
    );
}

  return (
    <MovieSideBarSuggestion>
      <MovieSideBarSuggestionCard>
        <MovieSideBarSuggestionRight>
          <MovieSuggestionTitle>
            {props.data.original_title}
          </MovieSuggestionTitle>{" "}
          {props.data.release_date ? (
            <MovieSuggestionDate>
              {props.data.release_date}
            </MovieSuggestionDate>
          ) : null}
          <ReactStars
            count={5}
            size={15}
            value={props.data.vote_average / 2}
            isHalf={true}
            activeColor="#F67553"
          />
        </MovieSideBarSuggestionRight>
        <MovieSideBarSuggestionImg>
          {props.data.poster_path ? (
            <img
              src={imgurl}
              style={{ width: "50px", padding: "1%", objectFit: "cover" }}
            />
          ) : (
            <img
              src={noimg}
              style={{
                width: "50px",
                padding: "1%",
                height: "70px",
                objectFit: "cover",
              }}
            />
          )}
        </MovieSideBarSuggestionImg>
      </MovieSideBarSuggestionCard>
      <MovieSideBarSuggestionCard>
        <MovieSideBarShareBtn onClick={handleSharePost}>
          share
          <RiShareForwardFill />
        </MovieSideBarShareBtn>
        <MovieSideBarRedBtn onClick={addWatchList}>
          watch-list <RiAddLine />
        </MovieSideBarRedBtn>
      </MovieSideBarSuggestionCard>
    </MovieSideBarSuggestion>
  );
}

}

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
  const auth = firebase.auth();
  const uid = auth.currentUser.uid

  const handleFollow = async(e) => {
    props.setnotClicked(false);
    const usersRef = await firebase.firestore().collection('users').doc(uid);
    await usersRef.update(
      {
        friendlist: firebase.firestore.FieldValue.arrayUnion(props.data.uid)
      }
      )
  }

  return (
    <MovieSideBarSuggestion>
      <MovieSideBarSuggestionCard onClick={() => props.findProfile(props.data.uid)}>
      <div className="post__owner-text">
      <div className="usersearch-text__name">
           {props.data.displayName}@
          </div>
          { notClicked && props.data.followed ? <MovieSideBarRedBtn onClick={handleFollow} width={70}>follow <RiAddLine /></MovieSideBarRedBtn> : <MovieSideBarRedBtn width={70}>followed</MovieSideBarRedBtn> }
          </div>
        <div className="post__owner">
        <Avatar src={props.data.photoURL} size={60} round={true} style={{marginRight: "15px"}}/>
        </div>
      </MovieSideBarSuggestionCard>
    </MovieSideBarSuggestion>
  );
}
}
