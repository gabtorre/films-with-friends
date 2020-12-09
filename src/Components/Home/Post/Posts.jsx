import {firestore} from '../../../firebase'
import { useState, useEffect } from 'react';
import Post from './Post'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from 'react-bootstrap';
import {ActivityCardWrapper, ActivityWrapper} from '../../StyledComponents'

const Posts = () => {

    const [posts, getPost] = useState(null);

    useEffect( () => {
        async function fetchData() {
            const snapshot = await firestore.collection('post').get()
            const post = snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
            getPost(post)
            console.log(post, 'posts')
        }
        fetchData();
    }, [])

    return (
    <>
    <Row>
        {posts && posts.map(post =>
            <Col xl={6}>
                <Card>
                    <Post key={post.id} id={post.id} text={post.text} image={post.poster} title={post.title} synopsis={post.synopsis} release={post.release}
                    uid={post.uid} />
                </Card>
            </Col>
        )}
    </Row>
    </>
    );
}

export default Posts;
