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
        let message = "Are you sure you want to delete this vehicle?  All maintenance records will be deleted.  This cannont be undone!"
        if (window.confirm(message) == true){
            handleDeleteVehicle()
            renderComponent()
        } 
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
