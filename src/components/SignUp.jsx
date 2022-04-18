import React from 'react';
import { Form, Button } from 'react-bootstrap';

const middleClass={maxWidth:"500px",marginLeft:"30%" ,alignItems:"center"}

const SignUp = () => {
    return (
        <div style={{textAlign : 'center'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control  type="text" style={middleClass} placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" style={middleClass} placeholder="Enter email" />
                    
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" style={middleClass} placeholder="Password" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" style={middleClass} placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;