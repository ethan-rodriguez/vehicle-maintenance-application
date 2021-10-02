import React, { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

const Signup = () => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='signup__div' >
            {/* <div className='signup__form'>
                <form onSubmit={onSubmit} >
                    <p>Username</p>
                        <input onChange={onChange} name='username' type='text'></input>
                    <p>Email Address</p>
                        <input onChange={onChange} name='email' type='text'></input>
                    <p>Password</p>
                        <input onChange={onChange} name='password' type='password'></input>
                    <p>Password Confirmation</p>
                        <input onChange={onChange} name='password_confirmation' type='password'></input><br />
                        <input type='submit'></input>
                </form>
                <p>Already a member? <a href='/login' >Login</a></p>
            </div> */}
            <div className='signup__form' >
                <h6>To become a member, sign up below.</h6>
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
                    
                </Form><br />
                    <p>Already a member? Login <a href='/login'>here</a></p>
            </div>
        </div>
    )
}

export default Signup
