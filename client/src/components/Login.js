import React, { useState } from 'react'
import { Link } from 'react-router-dom'


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
        <div>
            <form onSubmit={onSubmit} >
                <p>Username</p>
                    <input onChange={onChange} name='username' type='text'></input>
                <p>Password</p>
                    <input onChange={onChange} name='password' type='password'></input><br />
                    <input type='submit'></input>
            </form><br />
            <Link to='/logout'>Logout</Link>
        </div>
    )
}

export default Login
