import { useState, useEffect } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Follow from "../../Follow/Follow";
import {
  MovieCardWrapper,
} from "../../StyledComponents";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "../../../../src/custom.scss";
import Avatar from "react-avatar";
import React from "react";
import { ReactComponent as AddIcon } from "../../../Icons/Add.svg";
import { ReactComponent as ChatIcon } from "../../../Icons/Chat.svg";
import { ReactComponent as FavoriteIcon } from "../../../Icons/Favorite.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import LikeButton from "./LikeButton";

const Post = (props) => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const uid = auth.currentUser.uid;
  const usersRef = firestore.collection("users").doc(uid);
  const commentRef = firestore.collection('comments').where("post", "==", props.id)
  const [ comments ] = useCollectionData(commentRef, {idField: 'id'});


  const addWatchList = async (e) => {
    e.preventDefault();
    const toWatchMovieDetail = {
      movieid: props.id,
      title: props.title,
      date: props.release,
      poster: props.poster,
    };
    await usersRef
      .update({
        watchlist: firebase.firestore.FieldValue.arrayUnion(toWatchMovieDetail),
      })
      .then(async () => {
        toast.success(`${props.title} is added to your watch list!`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.error(errorCode + errorMessage);
      });
  };

  return (
    <>
      <ToastContainer />
      {/* <Follow style={{marginRight: "5%", padding: "5%"}} owner={props.uid}/> */}
      <div className="post__owner">
        <Avatar
          className="post__owner-img"
          src={props.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"}
          name={props.username}
          round={true}
          size="45"
        />
        <div className="post__owner-text">
          <div className="post__owner-text__name">{props.username}</div>
          <div className="post__owner-text__label">
            Rated {props.rating} stars
          </div>
          {props.rating > 3 ? (
            <div className="post__owner-text__label">recommended</div>
          ) : (
            <div className="post__owner-text__label">not recommended</div>
          )}
        </div>
      </div>
      <p className="post__caption mt-3">{props.text}</p>
      <MovieCardWrapper>
        <div className="mr-4">
          <img
            className="round-border"
            src={`https://image.tmdb.org/t/p/w500/${props.image}`}
            style={{ width: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="post__movie">
          <h4 className="post__movie-title">
            {props.title}
            <span className="post__movie-title-date">({props.release})</span>
          </h4>
          <div className="post__movie-text">{props.synopsis}</div>
          <OverlayTrigger
            key={props.key+"icon1"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>Add to watchlist</Tooltip>}
          >
            <AddIcon
              className="post__icons"
              alt="add to watchlist"
              onClick={addWatchList}
            />
          </OverlayTrigger>
          { comments ?
          <OverlayTrigger
          key={props.key+"icon2"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{comments.length} Comments</Tooltip>}
          >
            <ChatIcon className="post__icons" />
          </OverlayTrigger> : <OverlayTrigger
          key={props.key+"icon2"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>0 Comments</Tooltip>}
          >
            <ChatIcon className="post__icons" />
          </OverlayTrigger>}
          {/* <OverlayTrigger
            key={props.key+"icon3"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>Like</Tooltip>}
          > */}
            <LikeButton id={props.id} uid={uid} key={props.id} />
            {/* <FavoriteIcon className="post__icons" /> */}
          {/* </OverlayTrigger> */}
        </div>
      </MovieCardWrapper>
      <>
        {comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              photoURL={comment.photoURL}
              data={comment}
              username={comment.username}
            />
          ))}
      </>
      <div className="mt-4">
        <AddComment id={props.id}/>
      </div>
    </>
  );
};

export default Post;
