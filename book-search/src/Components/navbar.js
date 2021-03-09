import react from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function TopNav() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="">Search</Nav.Link>
          <Nav.Link href="">Saved</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default TopNav;