import {Navbar, Container, Stack,  Nav} from "react-bootstrap";
import { NavLink} from "react-router-dom";

function NavBar({user}){
    return(
    <Navbar bg="info" variant="dark">
    <Container>
    <Navbar.Brand>Your's Expenses </Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/news">News</Nav.Link>
    </Nav>
    <Navbar.Text>
    <h4>Signed in as {user.first_name}</h4>
    </Navbar.Text>
    </Container>
    </Navbar>
    )
}

export default NavBar