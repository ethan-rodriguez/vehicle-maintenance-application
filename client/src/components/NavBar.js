import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const NavBar = ({user}) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Container>
                
                <Navbar.Brand href="/garage">
                    
                    {user ? `${user.username}'s` : ''} Garage
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="/createvehicle">Add Vehicle</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/signup">
                        Signup
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                </Container>
                </Navbar>
        </div>
    )
}

export default NavBar
