import react from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';

function Search() {
  return (
    <Card>
      <Card.Body>Book Search
      <InputGroup className="mb-3">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for any book here"
          />
        </InputGroup>
          <Button> Search </Button>


      </Card.Body>

    </Card>
  );
}

export default Search;