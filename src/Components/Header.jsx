
import {Navbar ,Nav , Container} from 'react-bootstrap'
import{NavLink} from "react-router-dom"
import '../Style/index.css'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                      <NavLink className="Nav-Link"  to="/add">AddProduct</NavLink>
                      <NavLink className="Nav-Link" to="/update">UpdateProduct</NavLink>
                      <NavLink className="Nav-Link"  to="/login">LogIn</NavLink>
                      <NavLink className="Nav-Link" to="/register">Register</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}
export default Header;