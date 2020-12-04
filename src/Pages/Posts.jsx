import {firestore} from '../firebase.js'
import { useState, useEffect } from 'react';
import Post from '../Components/Post'


const Posts = () => {

    const [posts, getPost] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const snapshot = await firestore.collection('post').get()
            const post = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            getPost(post)
        }
        fetchData();
    }, [])

    return (  
        <>
        {posts && posts.map(post => <Post key={post.id} id={post.id} text={post.text}/>)}
        </>
    );
}
 
export default Posts;