import React from "react";
import LayoutWeb from "../../../layouts/Web";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    document.title = "SIPANTAI";



    return (
        <React.Fragment>
            <LayoutWeb>

                <div className="container mt-75 text-white font-bold">
               
                    <h2 className="text-center">Register Akun</h2>
                    <Form className=" p-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    

                </div>
            </LayoutWeb>
        </React.Fragment>
    );
}

export default Login;
