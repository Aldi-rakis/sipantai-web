//import react and hook
import React, { useState, useEffect } from "react";

//import component react bootstrap
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Modal
} from 'react-bootstrap';

//import react router dom
import {
    Link,
    useNavigate
} from "react-router-dom";

//import BASE URL API
import Api from "../../api";

//import js cookie
import Cookies from "js-cookie"; 



function WebHeader() {

   
        

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" className="navbar-custom shadow-xl mt-12"  fixed="bottom" style={{backgroundColor: '#454160', borderRadius: 10}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-white"> <i className=""></i> Back Home </Navbar.Brand>
                   
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"  /> */}
                
                </Container>
            </Navbar>
            
        </React.Fragment>
    );
}

export default WebHeader;