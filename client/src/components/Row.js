import React from 'react'
import VehicleCard from './VehicleCard'
import './Row.css'

const Row = ({vehicles, user}) => {


    const renderVehicles = () => {
        return vehicles.map(vehicle => {
            return <VehicleCard vehicle={vehicle} key={vehicle.id} />
        })
    }


    return (
            <div className='row__div'>
                    <br />
                    <h4>{`${user.username} please select the vehicle you would like to work on today.`}</h4>
                <div className="card__div">
                    {renderVehicles()}
                </div>
            </div>
    )
}

export default Row
