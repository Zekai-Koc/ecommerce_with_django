import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
   return (
      <header>
         <Navbar
            bg="dark"
            expand="lg"
            className="bg-body-tertiary"
            collapseOnSelect
         >
            <Container>
               <LinkContainer to="/">
                  <Navbar.Brand>My Ecommerce Site</Navbar.Brand>
               </LinkContainer>

               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <LinkContainer to="/cart">
                        <Nav.Link>
                           <i className="fas fa-shopping-cart"></i>Cart
                        </Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/login">
                        <Nav.Link>
                           <i className="fas fa-user"></i>Login
                        </Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/API Integration Demo">
                        <Nav.Link>API Integration Demo</Nav.Link>
                     </LinkContainer>

                     <LinkContainer to="/Change Backend Tech">
                        <Nav.Link>Change Backend Tech</Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
}

export default Header;
