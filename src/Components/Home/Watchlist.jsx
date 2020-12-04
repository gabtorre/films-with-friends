import {CardWrapper} from '../StyledComponents'
import Card from 'react-bootstrap/Card'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function WatchList() {

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const watchlistdata = firestore.collection('watchlist');
  const query = watchlistdata.orderBy('createdAt', 'desc');
  const [ userwatchlist ] = useCollectionData(query, {idField: 'uid'});

  return (
    <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <Card.Title>Watchlist</Card.Title>
            {userwatchlist && userwatchlist.map(movie =>
            <>
              <Card.Img variant="top" src={movie.poster} style={{height: '100px', width: '100%', objectFit: 'cover'}}/>
              <Card.Text key={movie.id}>{movie.title}</Card.Text>
            </>)}
        </CardWrapper>
    </Card>
  );

  // return (
  //   <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
  //       <CardWrapper>
  //           <Card.Title>Watchlist</Card.Title>
  //           {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  //           <Card.Text>1</Card.Text>
  //           <Card.Text>2</Card.Text>
  //       </CardWrapper>
  //   </Card>
  // );

}

export default WatchList;
