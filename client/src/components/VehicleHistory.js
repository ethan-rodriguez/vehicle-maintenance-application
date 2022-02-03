import React, { useEffect } from 'react'

const VehicleHistory = ({ selectedVehicleId }) => {

    const [vehicleHistory, setVehicleHistory] = React.useState()

    const fetchVehicleHistory = () => {
        fetch(`/vehicles/${selectedVehicleId[0].id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(selectedVehicleId[0].id)
            console.log(data.routines)
            // setVehicleHistory(data.routines)
        })
    }

    useEffect(() => {
        fetchVehicleHistory()
    }, [])


    return (
        <div>
            <h6>{vehicleHistory}</h6>
        </div>
    )
}

export default VehicleHistory
