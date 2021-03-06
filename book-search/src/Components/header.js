import react from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

function Header() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Google Books Search</h1>
        <p>
          Search for and Save Books of Interest
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Header;