import React from 'react'
import VehicleCard from './VehicleCard'
import './Row.css'

const Row = ({vehicles, user, setVisible, setSelectedVehicleId}) => {

    // const renderVehicles = () => {
    //     return vehicles.map(vehicle => {
    //         return <VehicleCard vehicle={vehicle} key={vehicle.id} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId}/>
    //     })
    // }

    const diplayVehicles = vehicles.map(vehicle => <VehicleCard vehicle={vehicle} key={vehicle.id} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId} />)


    const countVehicles = () => {
        if (vehicles.length === 1) {
            return <h5>{`${user.username}, you have ${vehicles.length} vehicle in your garage.`}</h5>
        } else if (vehicles.length > 1) {
            return <h5>{`${user.username}, you have ${vehicles.length} vehicles in your garage.`}</h5> 
        } else {
            return <h5>{`${user.username}, you do not have any vehicles in your garage.  Please add a vehicle using the form below.`}</h5>
        }
    }



    return (
            <div className='row__div'>
                <br />
                {countVehicles()}
                <div className="card__div">
                    {/* {renderVehicles()} */}
                    {diplayVehicles}
                </div>
            </div>
    )
}

export default Row
