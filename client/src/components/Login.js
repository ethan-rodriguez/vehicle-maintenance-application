import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = ({handleLogin}) => {

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
            console.log(data, 'login fetch')
            handleLogin(data)
            history.push('/garage')
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
        </div>
    )
}

export default Login
