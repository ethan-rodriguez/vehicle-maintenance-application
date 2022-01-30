import React from 'react'
// import { useHistory } from 'react-router-dom'

const DeleteVehicle = ({selectedVehicleId, vehicles, setVehicles, setVisible}) => {

    const handleDeleteVehicle = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`vehicles/${selectedVehicleId}`, config)
            setVehicles(vehicles.filter(vehicle => vehicle.id != selectedVehicleId))
    }

    const renderComponent = () => {
        setVisible(true)
    }

    const handleClick = () => {
        handleDeleteVehicle()
        renderComponent()
    }

    return (
        <div>
            <button onClick={() => {handleClick()}}>
                Remove vehicle
            </button>
        </div>
    )
}

export default DeleteVehicle
