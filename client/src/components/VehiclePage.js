import React, { useState } from 'react'
import VehiclePageCard from './VehiclePageCard'
import UpdateVehicle from './UpdateVehicle'
import './VehiclePage.css'



const VehiclePage = ({ vehicles, setVehicles, setVisible, selectedVehicleId }) => {

    const [state, setState] = useState()

    const [updateVehicleVisible, setUpdateVehicleVisible] = useState(false)

    const filterVehicles = () => {
        let selected = vehicles.filter(vehicle => vehicle.id === selectedVehicleId).map(vehicle => <VehiclePageCard key={vehicle.id} vehicle={vehicle}/>)
        return selected
    }

    const updateVehicle = () => {
        let vehicleToUpdate = vehicles.filter(vehicle => vehicle.id === selectedVehicleId).map(vehicle => <UpdateVehicle key={vehicle.id} vehicle={vehicle} vehicles={vehicles} setVehicles={setVehicles} selectedVehicleId={selectedVehicleId} />)
        return vehicleToUpdate
    }

    return (
        <div className="vehicle__page">
            <div className='vehicle__info'>
                <br />
                <br />
                <br />
                
                {filterVehicles()}
            </div>
            <div className="garage__button__div">
            </div>
            <div className="buttons__div">
                <button 
                    onClick={() => setVisible(true)} className="garage__button">Return to garage
                </button>
                <button 
                onClick={() => setUpdateVehicleVisible(!updateVehicleVisible)} 
                className="update__button" >Update Vehicle Information
                </button>
            </div>
            <div className="update__vehicle">
                {updateVehicleVisible ? updateVehicle() : null}
            </div>
        </div>
    )
}

export default VehiclePage
