// import {firestore} from '../../../firebase'
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Post from './Post'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Card } from 'react-bootstrap';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Posts = () => {

    const firestore = firebase.firestore();
    const postRef = firestore.collection('post');
    const sortedPostsRef = postRef.orderBy('createdAt', 'desc');;
    const [ sortedposts ] = useCollectionData(sortedPostsRef, {idField: 'id'});
    console.log(postRef)
    return (
        <>
        <h1 className="mt-5 mb-4 bold">Activity Feed</h1>
        <Row>
            {sortedposts && sortedposts.map(post =>
                <Col xl={6}>
                    <Card className="mb-5">
                        <Post key={post.id} id={post.id} text={post.text} image={post.poster} title={post.title} synopsis={post.synopsis} release={post.release}
                        uid={post.uid} username={post.username} photoURL={post.photoURL} rating={post.rating} />
                    </Card>
                </Col>
            )}
        </Row>
        </>
        );

}

export default Posts;
