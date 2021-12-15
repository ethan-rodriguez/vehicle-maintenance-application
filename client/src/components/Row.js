import React from 'react'
import VehicleCard from './VehicleCard'
import './Row.css'

const Row = ({vehicles, user, setVisible, setSelectedVehicleId}) => {

    const renderVehicles = () => {
        return vehicles.map(vehicle => {
            return <VehicleCard vehicle={vehicle} key={vehicle.id} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId}/>
        })
    }

    return (
            <div className='row__div'>
                <br />
                <h5>{`${user.username}, you have ${vehicles.length} vehicle(s) in your garage.`}</h5> 
                <div className="card__div">
                    {renderVehicles()}
                </div>
            </div>
    )
}

export default Row
