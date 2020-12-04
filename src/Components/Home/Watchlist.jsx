import {CardWrapper} from '../StyledComponents'
import Card from 'react-bootstrap/Card'

function WatchList() {
  return (
    <Card style={{ width: '100%', marginBottom: '5%' }} id="admin-card">
        <CardWrapper>
            <Card.Title>Watchlist</Card.Title>
            <Card.Text>1</Card.Text>
            <Card.Text>2</Card.Text>
        </CardWrapper>
    </Card>
  );
}

export default WatchList;
