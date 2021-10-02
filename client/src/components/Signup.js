import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Create a Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password_confirmation" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Signup
