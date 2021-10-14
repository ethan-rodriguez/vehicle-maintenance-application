import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errors from './Errors';


const Login = ({handleLogin, errors}) => {

    const [state, setState] = useState({})

    const history = useHistory()

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
            console.log(data, `${data.username} is now logged in!`)
            handleLogin(data)
        })
    }


    return (
        <div className='login__div' >
            <div className='login__form' >
                <h6>Member login.</h6>
                <Form onSubmit={onSubmit} >
                    
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onChange={onChange} name='email' type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onChange={onChange} name='password' type="password" placeholder="Password" />
                    </FloatingLabel><br />
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form><br />
                <p>Not a member? Sign up <a href='/signup'>here</a></p>
            </div>
            <Errors errors={errors} />
        </div>
    )
}

export default Login
