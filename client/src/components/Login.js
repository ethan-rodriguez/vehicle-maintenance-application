import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/login', config)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div className='login__div' >
            {/* <form onSubmit={onSubmit} >
                <p>Username</p>
                    <input onChange={onChange} name='username' type='text'></input>
                <p>Password</p>
                    <input onChange={onChange} name='password' type='password'></input><br />
                    <input type='submit'></input>
            </form><br />
            <Link to='/logout'>Logout</Link> */}
            <div className='login__form' >
                <Form>
                    <Form.Group onChange={onChange} className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter name</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" onChange={onChange} >
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={onChange} type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Button onSubmit={onSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login
