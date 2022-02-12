import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'


const NavBar = ({user}) => {

    const whosGarage = () => {
        if (user) {
           return `${user.username}, Welcome to your garage`
        } else if (null) {
            return 'Welcome to the Garage'
        } else {
            return 'Welcome to the Garage'
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#action1">
                        {/* {user ? `${user.username}'s` : 'The'} Garage */}
                        {whosGarage()}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/garage">View Garage</Nav.Link>
                            <Nav.Link href="/allvehicles">List All Maintenance Records</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">Signup</Nav.Link>
                            <Nav.Link href="/logout">Logout</Nav.Link> */}
                        <NavDropdown title="Login Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/signup">Sign-up</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
