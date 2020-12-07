import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import { firestore } from '../../firebase.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Follow = (props) => {

    const auth = firebase.auth();
    const uid = auth.currentUser.uid

    
    const snapshot = firestore.collection('friends').where('uid', '==', 'IqzKStC4rEUrrbwSViuA8Sx5cV73')
    console.log(uid)
    
    const handleFollow = async (e) => {
        e.preventDefault();
        
        function fetchData() {
            const citiesRef = firestore.collection('friends').doc(uid).update({
                friends: firebase.firestore.FieldValue.arrayUnion(props.owner)
              });
        }
        fetchData();

        console.log('added')

    }

    return (
        <form onSubmit={handleFollow}>
            <Button type="submit">Follow</Button>
        </form>
    );
}
 
export default Follow;