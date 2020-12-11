import { firestore } from "../../../firebase";
import { useState } from "react";
import { CommentForm, CommentTextArea } from "../../StyledComponents";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";

const SbShareMovie = (props) => {
  const [text, setContent] = useState("");
  const auth = firebase.auth();
  const uid = auth.currentUser.uid;

  const handleCommentSubmission = async (e) => {
      e.preventDefault();
      const usersRef = await firestore.collection("users").doc(uid);
    const newPost = {
      text: text,
      movieid: props.id,
      title: props.title,
      poster: props.poster,
      release: props.release,
      synopsis: props.synopsis,
      username: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      rating: props.rating,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    };
    const newRating = {
      title: props.title,
      rating: props.rating,
      movieid: props.id,
      poster: props.poster,
      release: props.release,
    };
    const addtoWatchedList = {
      movieid: props.id,
      title: props.title,
      date: props.release,
      poster: props.poster,
      rating: props.rating,
    };
    await usersRef.update({
      watched: firebase.firestore.FieldValue.arrayUnion(addtoWatchedList),
    });
    // await usersRef.update({
    //   ratings: firebase.firestore.FieldValue.arrayUnion(newRating),
    //   photoURL: auth.currentUser.photoURL,
    //   posts: newPost,
    // });
    await firestore
      .collection("post")
      .add(newPost)
      .then(async(docRef) =>{
        await usersRef.update({
          ratings: firebase.firestore.FieldValue.arrayUnion(newRating),
          posts: firebase.firestore.FieldValue.arrayUnion(docRef.id),
        });
      })
      .catch((err) => {
        console.error("error adding post: ", err);
      });
    setContent("");
  };

  return (
    <>
      <CommentForm id="sharePostForm" onSubmit={handleCommentSubmission}>
        <CommentTextArea
          id="text"
          label="Share"
          name="text"
          value={text}
          style={{ color: "#FFF" }}
          placeholder="?What do you think"
          onChange={(e) => setContent(e.target.value)}
        />
      </CommentForm>
      <Button
        variant="danger"
        form="sharePostForm"
        type="submit"
        style={{ width: "100%", marginTop: "2%" }}
      >
        Share
      </Button>
    </>
  );
};

export default SbShareMovie;
