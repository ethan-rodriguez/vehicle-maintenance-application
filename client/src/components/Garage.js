import React from 'react'
import background from '../images/garage.jpeg'
import VehicleCard from './VehicleCard'




const Garage = ({vehicles}) => {

    const renderVehicles = () => {
        return vehicles.map(vehicle => {
            return <VehicleCard vehicle={vehicle} key={vehicle.id} />
        })
    }


    return (
        <div id='garage__div' style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >

            <div>
                {/* <VehicleCarousel /> */}
                <br />
                <br />
                {renderVehicles()}
            </div>
            
        </div>
    )
}

export default Garage
