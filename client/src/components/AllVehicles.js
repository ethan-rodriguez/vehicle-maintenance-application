import React, {useEffect} from 'react'

const AllVehicles = ({user}) => {

    const fetchAllUserVehicles = () => {
        fetch(`user/${user.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <p>all vehicles component</p>
        </div>
    )
}

export default AllVehicles
