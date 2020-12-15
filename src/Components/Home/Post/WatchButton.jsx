import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { ReactComponent as AddIcon } from "../../../Icons/Add.svg";
import Tooltip from "react-bootstrap/Tooltip";
import { toast } from "react-toastify";
import { MovieSideBarRedBtn } from "../../StyledComponents";
  import { RiAddLine } from "react-icons/ri";

const WatchButton = (props) => {

    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const uid = auth.currentUser.uid;
    const usersRef = firestore.collection("users").doc(uid);

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
            <OverlayTrigger
                key={props.key+"icon1"}
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Add to watchlist</Tooltip>}
            >
                <MovieSideBarRedBtn
                    alt="add to watchlist"
                    onClick={addWatchList}
                    className="mr-2" >
                watch-list <RiAddLine />
                </MovieSideBarRedBtn>
            </OverlayTrigger>
        </>
    );
}
 
export default WatchButton;