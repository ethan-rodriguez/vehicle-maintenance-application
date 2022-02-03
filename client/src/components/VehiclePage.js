import React, { useState } from 'react'
import VehiclePageCard from './VehiclePageCard'
import UpdateVehicle from './UpdateVehicle'
import DeleteVehicle from './DeleteVehicle'
import CreateMaintenanceRecord from './CreateMaintenanceRecord'
import VehicleHistory from './VehicleHistory'

// import './VehiclePage.css'

const VehiclePage = ({ vehicles, setVehicles, setVisible, selectedVehicleId }) => {


    const [updateVehicleVisible, setUpdateVehicleVisible] = useState(false)

    let selectedVehicle = vehicles.filter(vehicle => vehicle.id === selectedVehicleId)
    const filterVehicles = () => {
        return selectedVehicle.map(vehicle => <VehiclePageCard key={vehicle.id} vehicle={vehicle}/>)
    }

    const updateVehicle = () => {
        return selectedVehicle.map(vehicle => <UpdateVehicle key={vehicle.id} vehicle={vehicle} vehicles={vehicles} setVehicles={setVehicles} selectedVehicleId={selectedVehicleId} />)
    }

    return (
        <div className="vehicle__page">
            <div className='vehicle__info'>
                <br />
                <br />
                <br />
                {filterVehicles()}
                {/* <p>{selectedVehicle[0].year}</p> */}
            </div>
            <div className="garage__button__div">
            </div>

            <div className="buttons__div">
                <button 
                    onClick={() => setVisible(true)} 
                    className="garage__button">Return to garage
                </button>
                <button 
                    onClick={() => setUpdateVehicleVisible(!updateVehicleVisible)} 
                    className="update__button" >Update Vehicle Information
                </button>
            </div>
            
            <DeleteVehicle vehicles={vehicles} setVehicles={setVehicles} selectedVehicleId={selectedVehicleId} setVisible={setVisible} />

            <CreateMaintenanceRecord selectedVehicleId={selectedVehicleId} />

            <VehicleHistory selectedVehicleId={selectedVehicle}/>

            <div className="update__vehicle">
                {updateVehicleVisible ? updateVehicle() : null}
                <br />
            </div>
        </div>
    )
}

export default VehiclePage
