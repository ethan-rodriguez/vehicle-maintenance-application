import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
        <div>
            <br/>
            <br/>
            
            <h3>Logging out...</h3>
            
        </div>
    )
}

export default Logout
