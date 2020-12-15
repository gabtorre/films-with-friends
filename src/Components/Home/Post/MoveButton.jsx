import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { toast } from "react-toastify";
import { MovieSideBarRedBtn } from "../../StyledComponents";
import { BsFillEyeFill } from "react-icons/bs";

const MoveButton = (props) => {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const uid = auth.currentUser.uid;
    const usersRef = firestore.collection("users").doc(uid);

    const markWatched = async (e) => {
        e.preventDefault();
        const movieDetails = {
          movieid: props.id,
          title: props.title,
          date: props.release,
          poster: props.poster,
        };
        await usersRef
          .update({
            watched: firebase.firestore.FieldValue.arrayUnion(movieDetails),
            watchlist: firebase.firestore.FieldValue.arrayRemove(movieDetails)
          })
          .then(async () => {
            toast.success(`${props.title} was marked as watched!`);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            toast.error(errorCode + errorMessage);
          });
    };

    return (
        <>
            <OverlayTrigger
                key={props.key+"icon1"}
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Mark as watched</Tooltip>}
            >
                <MovieSideBarRedBtn
                    width="auto"
                    alt="Mark as watched"
                    onClick={markWatched}
                    >
                    <BsFillEyeFill />
                </MovieSideBarRedBtn>
            </OverlayTrigger>
        </>  
    );
}
 
export default MoveButton;