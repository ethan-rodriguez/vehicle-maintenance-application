import React, { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'




const CreateVehicle = () => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Form onSubmit={onSubmit} >
                    
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3">
                        <Form.Control onChange={onChange} name='username' type="name" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control onChange={onChange} name='email' type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel 
                        controlId="floatingPassword"
                        label="Password">
                        <Form.Control onChange={onChange} name='password' type="password" placeholder="Password" />
                    </FloatingLabel><br />
                    
                    <FloatingLabel 
                        controlId="floatingPassword"
                        label="Password Confirmation">
                        <Form.Control onChange={onChange} name='password_confirmation' type="password" placeholder="Password Confirmation" />
                    </FloatingLabel><br />
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </Form>
        </div>
    )
}

export default CreateVehicle
