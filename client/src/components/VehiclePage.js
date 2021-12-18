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
        <div>
            <div className='vehicle__info'>
                <br />
                <br />
                <br />
                <h1>This is vehicle page</h1>
                {filterVehicles()}
                <div className="garage__button">
                    <button onClick={() => setVisible(true)} >Return to garage</button>
                </div>
                <div className="update__button">
                    <button onClick={() => setUpdateVehicleVisible(!updateVehicleVisible)} >Update Vehicle Information</button>
                </div>
            </div>
            <div className="update__vehicle">
                {updateVehicleVisible ? updateVehicle() : null}
            </div>
        </div>
    )
}

export default VehiclePage
