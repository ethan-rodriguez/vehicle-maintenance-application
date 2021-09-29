import React, { useEffect } from 'react'

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
            handleLogout()
        })
    })

    
    return (
        <div>
            

            
        </div>
    )
}

export default Logout
