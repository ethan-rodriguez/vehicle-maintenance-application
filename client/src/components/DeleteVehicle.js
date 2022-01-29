import React from 'react'
import { useHistory } from 'react-router-dom'

const DeleteVehicle = ({selectedVehicleId, vehicles, setVehicles}) => {


    const history = useHistory()

    const handleDeleteVehicle = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`vehicles/${selectedVehicleId}`, config)
            setVehicles(vehicles.filter(vehicle => vehicle.id != selectedVehicleId))
            history.push('/garage')
    }

    return (
        <div>
            <button onClick={() => {handleDeleteVehicle()}}>
                Remove vehicle
            </button>
        </div>
    )
}

export default DeleteVehicle
