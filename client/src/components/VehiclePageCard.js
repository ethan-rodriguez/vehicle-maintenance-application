import React from 'react'

const VehiclePageCard = ({vehicle}) => {



    return (
        <div>
            <div>
                <img src={vehicle.image_url} alt="vehicle" style={{width: '20%', height: '20%'}}/>
            </div>
            <div>
            <p>{vehicle.year}</p>
            <p>{vehicle.make}</p>
            <p>{vehicle.model}</p>
            <p>{vehicle.mileage}</p>
            <p>{vehicle.vin}</p>

            </div>
            
        </div>
    )
}

export default VehiclePageCard
