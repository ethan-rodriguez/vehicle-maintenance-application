import React from 'react'
import VehicleCard from './VehicleCard'
import './Row.css'

const Row = ({vehicles}) => {


    const renderVehicles = () => {
        return vehicles.map(vehicle => {
            return <VehicleCard vehicle={vehicle} key={vehicle.id} />
        })
    }


    return (
            <div className='row__div'>
                    <h2>Row title</h2>
                <div className="card__div">
                    {renderVehicles()}
                </div>
            </div>
    )
}

export default Row
