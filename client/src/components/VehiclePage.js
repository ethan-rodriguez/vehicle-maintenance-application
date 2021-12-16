import React, { useState } from 'react'
import VehiclePageCard from './VehiclePageCard'
import UpdateVehicle from './UpdateVehicle'
import './VehiclePage.css'



const VehiclePage = ({ vehicles, setVisible, selectedVehicleId }) => {

    const [state, setState] = useState()

    const filterVehicles = () => {
        let selected = vehicles.filter(vehicle => vehicle.id === selectedVehicleId).map(vehicle => <VehiclePageCard key={vehicle.id} vehicle={vehicle}/>)
        return selected
    }

    


    return (
        <div>
            <div className='vehicle__info'>
                <br />
                <br />
                <br />
                <h1>This is vehicle page</h1>
                {filterVehicles()}
                <button onClick={() => setVisible(true)} >Return to garage</button>
            </div>
    
            <div className="update__vehicle">
                <UpdateVehicle />
            </div>
        </div>
    )
}

export default VehiclePage
