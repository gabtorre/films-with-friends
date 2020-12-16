import Comment from "./Comment";
import AddComment from "./AddComment";
import moment from 'moment'
import {
  MovieCardWrapper,
} from "../../StyledComponents";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import firebase from "firebase/app";
import "firebase/firestore";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import "firebase/auth";
import "../../../../src/custom.scss";
import Avatar from "react-avatar";
import React from "react";
import { ReactComponent as ChatIcon } from "../../../Icons/Chat.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LikeButton from './LikeButton';
import WatchButton from './WatchButton';

const Post = (props) => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const uid = auth.currentUser.uid;
  const postRef = firestore.collection("posts").doc(props.id);
  const [postData, loading, error] = useDocumentData(
    firestore.doc('posts/' + props.id)
  );

  return (
    <>
      <ToastContainer />
      <div className="post__owner">
        <Avatar
          className="post__owner-img"
          style={{cursor: "pointer"}}
          onClick={() => props.findProfile(props.uid)}
          src={props.photoURL || "https://i.ibb.co/cJ6G9Vc/image.png"}
          name={props.username}
          round={true}
          size="45"
        />
        <div className="post__owner-text">
          <div className="post__owner-text__name">{props.username}</div>
          { props.createdAt && <div className="post__owner-text__label">
            Rated {props.rating} stars {moment(props.createdAt.toDate()).fromNow()}
          </div> }
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
            style={{ width: "150px", objectFit: "cover", cursor: "pointer" }}
            onClick={()=> window.open(`https://www.themoviedb.org/movie/${props.movieid}`)}
          />
        </div>
        <div className="post__movie">
          <h4 className="post__movie-title">
            {props.title}
            <span className="post__movie-title-date">({props.release})</span>
          </h4>
          <div className="post__movie-text">{props.synopsis}</div>
          <WatchButton
            color={'black'}
            key={props.id} id={props.id} title={props.title}
            release={props.release} poster={props.image}
          />
          { postData && postData.comments ?
          <OverlayTrigger
          key={props.key+"icon2"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{postData &&
              postData.comments.length} Comments</Tooltip>}
          >
            <ChatIcon className="post__icons" />
          </OverlayTrigger> : <OverlayTrigger
          key={props.key+"icon2"}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>0 Comments</Tooltip>}
          >
            <ChatIcon className="post__icons" />
          </OverlayTrigger>}
          <LikeButton id={props.id} uid={uid} key={props.key} />
        </div>
      </MovieCardWrapper>
      <>
        {postData &&
          postData.comments.map(comment=> (
            <Comment
              key={comment.createdAt}
              id={comment.createdAt}
              uid={comment.uid}
              findProfile={props.findProfile}
              content={comment.content}
              photoURL={comment.photoURL}
              data={comment}
              username={comment.username}
              postRef={postRef}
            />
          ))}
      </>
      <div className="mt-4">
        <AddComment id={props.id} key={props.key} />
      </div>
    </>
  );
};

export default Post;
