import React, { useState } from 'react'

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
        <div>
            <form onSubmit={onSubmit} >
                <p>Username</p>
                    <input onChange={onChange} name='username' type='text'></input>
                <p>Email Address</p>
                    <input onChange={onChange} name='email' type='text'></input>
                <p>Password</p>
                    <input onChange={onChange} name='password' type='password'></input>
                <p> Password Confirmation</p>
                    <input onChange={onChange} name='password_confirmation' type='password'></input><br />
                    <input type='submit'></input>
            </form>
        </div>
    )
}

export default Signup
