import firebase from 'firebase/app';
import { useState, useEffect } from 'react';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FB_APIKey,
        authDomain: process.env.REACT_APP_FB_AUTHD,
        projectId: process.env.REACT_APP_FB_PID,
        storageBucket: process.env.REACT_APP_FB_SB,
        messagingSenderId: process.env.REACT_APP_FB_MSID,
        appId: process.env.REACT_APP_FB_APPID,
    })
}

const Posts = () => {

    const [posts, getPost] = useState(null);

    useEffect(() => {
        const cleanUp = firestore
          .doc(`post`)
          .collection("post")
          .onSnapshot(snapshot => {
            const posts = snapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data() }
            })
            getPost(posts)
          })
        return () => cleanUp()
      }, [])

    return (  
        <>
        {posts ? <h1>posts</h1> : <h1>Loading</h1>}
        <h1>Hello</h1>
        </>
    );
}
 
export default Posts;