import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {

    const history = useHistory()

    useEffect(() => {
        let config = {
            method: "DELETE",
        }
        fetch('/logout', config)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            // handleLogout()
        })
    })

    const handleLogout = () => {
        
    }

    return (
        <div>
            

            
        </div>
    )
}

export default Logout
