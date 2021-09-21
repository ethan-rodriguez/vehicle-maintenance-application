import React from 'react'

const Signup = () => {
    return (
        <div>
            <form>
                <p>Username</p>
                    <input type='text'></input>
                <p>Password</p>
                    <input type='password'></input>
                <p> Password Confirmation</p>
                    <input type='password'></input><br />
                    <input type='submit'></input>
            </form>
        </div>
    )
}

export default Signup
