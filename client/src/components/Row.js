import React from 'react'
import VehicleCard from './VehicleCard'
import './Row.css'

const Row = ({vehicles, user, visible, setVisible}) => {

    const renderVehicles = () => {
        return vehicles.map(vehicle => {
            return <VehicleCard vehicle={vehicle} key={vehicle.id} visible={visible} setVisible={setVisible} />
        })
    }

    return (
            <div className='row__div'>
                <br />
                <p>{`${user.username}, you have ${vehicles.length} vehicle(s) in your garage.`}</p> 
                <div className="card__div">
                    {renderVehicles()}
                </div>
            </div>
    )
}

export default Row
