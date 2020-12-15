import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { toast } from "react-toastify";
import { MovieSideBarRedBtn } from "../../StyledComponents";
import { RiAddLine, RiDeleteBin6Line } from "react-icons/ri";

const DeleteButton = (props) => {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const uid = auth.currentUser.uid;
    const usersRef = firestore.collection("users").doc(uid);
    console.log(props.list)

    const deleteMovie = async (e) => {
        e.preventDefault();

        const movieDetails = {
          movieid: props.id,
          title: props.title,
          date: props.release,
          poster: props.poster,
        };


        if (props.list == 'watchlist') {
            await usersRef
            .update({
                watchlist: firebase.firestore.FieldValue.arrayRemove(movieDetails)
            })
            .then(async () => {
              toast.success(`${props.title} was removed!`);
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              toast.error(errorCode + errorMessage);
            });
        } else {
            await usersRef
            .update({
                watched: firebase.firestore.FieldValue.arrayRemove(movieDetails)
            })
            .then(async () => {
                toast.success(`${props.title} was removed!`);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                toast.error(errorCode + errorMessage);
            });
        }
        // await usersRef
        //   .update({
        //     watched: firebase.firestore.FieldValue.arrayRemove(movieDetails)
        //   })
        //   .then(async () => {
        //     toast.success(`${props.title} was removed!`);
        //   })
        //   .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     toast.error(errorCode + errorMessage);
        //   });
    };

    return (
        <>
            <OverlayTrigger
                key={props.key+"icon1"}
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Delete Movie</Tooltip>}
            >
                <MovieSideBarRedBtn
                    width="auto"
                    alt="Delete Movie"
                    onClick={deleteMovie}
                    className="mr-2" >
                    <RiDeleteBin6Line />
                </MovieSideBarRedBtn>
            </OverlayTrigger>
        </>  
    );
}
 
export default DeleteButton;