import React, { useState } from 'react'
import VehiclePageCard from './VehiclePageCard'



const VehiclePage = ({ vehicles, setVisible, selectedVehicleId }) => {

    const [state, setState] = useState()

    const filterVehicles = () => {
        let selected = vehicles.filter(vehicle => vehicle.id === selectedVehicleId).map(vehicle => <VehiclePageCard key={vehicle.id} vehicle={vehicle}/>)
        return selected
    }

    


    return (
        <div>
            <div className='records__div'>
                <br />
                <br />
                <br />
                <h1>This is vehicle page</h1>
                {filterVehicles()}
                <button onClick={() => setVisible(true)} >Return to garage</button>
            </div>
        </div>
    )
}

export default VehiclePage
