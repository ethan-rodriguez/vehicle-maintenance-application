import React, {useEffect} from 'react'

const AllVehicles = (props) => {

    const fetchAllVehicles = () => {
        fetch(`vehicles/${props.user.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    useEffect(() => {
        fetchAllVehicles()
        
    }, [])

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
