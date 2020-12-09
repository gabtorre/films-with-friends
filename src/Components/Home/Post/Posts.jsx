import {firestore} from '../../../firebase'
import { useState, useEffect } from 'react';
import Post from './Post'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from 'react-bootstrap';

const Posts = () => {

    const [posts, getPost] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const snapshot = await firestore.collection('post').get()
            const post = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            getPost(post)
            // console.log(post, 'posts')
        }
        fetchData();
    }, [])

    return (
    <>
    <h1 className="mt-5 mb-4 bold">Activity Feed</h1>
    <Row>
        {posts && posts.map(post =>
            <Col xl={6}>
                <Card className="mb-5">
                    <Post key={post.id} id={post.id} text={post.text} image={post.poster} title={post.title} synopsis={post.synopsis} release={post.release}
                    uid={post.uid} username={post.username} photoURL={post.photoURL} />
                </Card>
            </Col>
        )}
    </Row>
    </>
    );
}

export default Posts;
