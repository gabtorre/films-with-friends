import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_APIKey,
    authDomain: process.env.REACT_APP_FB_AUTHD,
    projectId: process.env.REACT_APP_FB_PID,
    storageBucket: process.env.REACT_APP_FB_SB,
    messagingSenderId: process.env.REACT_APP_FB_MSID,
    appId: process.env.REACT_APP_FB_APPID,
}

if(!firebase.apps.length){firebase.initializeApp(firebaseConfig)}

export const firestore = firebase.firestore()

export default firebase