import React from 'react'
import { useState } from 'react';
// import { ethers } from "ethers";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';


function Login() {

    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [employeePassword, setEmployeePassword] = useState('');
    function validateForm() { return (employeeEmail.length > 0 && employeePassword > 0) && employeeAddress > 0; }
    function handlesubmit(event) {
        event.preventDefault();
    }
    return (
        <div className='Login'>
            <Form onSubmit={handlesubmit}>
                <Form.Group size='lg' controlId="employeeEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="empployeeEmail" value={employeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size='lg' controlId="employeeAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="empployeeAddress" value={employeeAddress} onChange={(e) => setEmployeeAddress(e.target.value)} />
                </Form.Group>
                <Form.Group size='lg' controlId="employeePassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="empployeePassword" value={employeePassword} onChange={(e) => setEmployeePassword(e.target.value)} />
                </Form.Group>
                <Button className ='login' block size='lg' type='submit' /*disabled={!validateForm()}*/>Login</Button>
            </Form>
        </div>
    );

}

export default Login;