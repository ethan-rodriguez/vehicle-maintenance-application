import React from 'react'

const VehiclePageCard = ({vehicle}) => {
    return (
        <div>
            <img src={vehicle.image_url} alt="vehicle image" style={{width: '30%'}}/>
            <p>{vehicle.year}</p>
            <p>{vehicle.make}</p>
            <p>{vehicle.model}</p>
            <p>{vehicle.mileage}</p>
            <p>{vehicle.vin}</p>
            
        </div>
    )
}

export default VehiclePageCard
