import {CardWrapper} from '../StyledComponents'
import Card from 'react-bootstrap/Card'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const WatchedList = (props) => {

  const firestore = firebase.firestore();
  const list = firestore.collection('watched').where('uid', '==', props.user)
  const [ userwatchedlist ] = useCollectionData(list, {idField: 'uid'});

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