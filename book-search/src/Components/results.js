import react from 'react'
import { Button, Card, Image } from 'react-bootstrap';

function Results() {
    return (
      <Card>
        <Card.Body>Results
          <Card>
            <Card.Body>
              <Button className='view'> View </Button>
              <Button className='save'> Save </Button>
              <h4>Title</h4>
              <Image className='bookIcon' src='../logo192.png'></Image>
              <p > Description text ... </p>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    );
  }
  
  export default Results;