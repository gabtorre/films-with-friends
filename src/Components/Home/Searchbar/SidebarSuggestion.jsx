import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
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

export default function Suggestion(props) {
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
}

function SuggestionCard(props) {
  const imgurl = `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
  const noimg =
    "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const uid = auth.currentUser.uid
  const usersRef = firestore.collection('users').doc(uid);

  const handleSharePost = (e) => {
    e.preventDefault();
    props.setFinalResult(props.data);
  };

  const addtoWatchList = async(e) => {
    e.preventDefault();
    const toWatchMovieDetail = {
      movieid: props.data.id,
      title: props.data.original_title,
      date: props.data.release_date,
      poster: imgurl,
      uid,
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
        <MovieSideBarRedBtn onClick={addtoWatchList}>
          watch-list <RiAddLine />
        </MovieSideBarRedBtn>
      </MovieSideBarSuggestionCard>
    </MovieSideBarSuggestion>
  );
}
