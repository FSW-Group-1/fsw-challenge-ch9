import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import firebase from '../../auth/firebase'
import { AuthContext } from "../../auth/Auth";

import { Container, Collapse, Nav, Navbar,  NavbarBrand, NavbarToggler, NavItem, NavDropdown } from 'react-bootstrap';

class Navbars extends Component {
    static contextType = AuthContext; 
    constructor(props){
        super(props);
  
        this.state ={
            signedIn: ''
        };
    }
    showLog(){
        
        const user = firebase.auth().currentUser;
        console.log("ShowLog:" + user)
        if(user != null){
            console.log("User is signed in")
            return(
                <>
                    <Nav.Link onClick={() => firebase.auth().signOut()}>Sign out</Nav.Link>
                </>
            )
        }else{
            console.log("User is not signed in!")
            return(
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            )
        }
        
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            {this.showLog()}
                            
                            {/* <Nav.Link onClick={() => firebase.auth().signOut()}>Sign out</Nav.Link>

                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navbars;