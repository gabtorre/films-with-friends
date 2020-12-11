import {CardWrapper} from '../StyledComponents'
import Card from 'react-bootstrap/Card'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const WatchList = (props) => {

  const firestore = firebase.firestore();
  const list = firestore.collection('watchlist').where('uid', '==', props.uid)
  const [ userwatchlist ] = useCollectionData(list, {id: 'id'});

  return (
    <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <Card.Title>Watchlist</Card.Title>
            {userwatchlist && userwatchlist.map(movie =>
             <>
                <Card.Img variant="top" src={movie.poster} style={{height: '100px', width: '100%', objectFit: 'cover'}}/>
                <Card.Text key={movie.id}>{movie.title}</Card.Text>
              </>

            )}
        </CardWrapper>
    </Card>
  );

}

export const WatchedList = (props) => {

  const firestore = firebase.firestore();
  const list = firestore.collection('watched').where('uid', '==', props.uid)
  const [ userwatchedlist ] = useCollectionData(list, {idField: 'uid'});

  // const query = list.orderBy('createdAt', 'desc');

  return (
    <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <Card.Title>Watched</Card.Title>
            {userwatchedlist && userwatchedlist.map(movie =>
             <>
                <Card.Img variant="top" src={movie.poster} style={{height: '100px', width: '100%', objectFit: 'cover'}}/>
                <Card.Text key={movie.id}>{movie.title}</Card.Text>
              </>

            )}
        </CardWrapper>
    </Card>
  );

}

