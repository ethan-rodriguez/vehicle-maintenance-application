import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const Logout = ({setUser}) => {

    const history = useHistory()

    useEffect(() => {
        let config = {
            method: "DELETE",
        }
        fetch('/logout', config)
            setUser(null)
            setTimeout(() => {
                console.log(`User has been logged out.`)
                history.push('/login')
            }, 2000)
        
    })

    // const handleLogout = () => {
        
    // }

    return (
        <div className='spinner__div'>
            <br/>
            <br/>
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            
        </div>
    )
}

export default Logout
