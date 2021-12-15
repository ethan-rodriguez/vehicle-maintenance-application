import React from 'react'

const VehiclePageCard = ({vehicle}) => {
    return (
        <div>
            <img src='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5db8ac181a84270007892480%2F0x0.jpg' alt="vehicle image" style={{width: '30%'}}/>
            <p>{vehicle.image_url}</p>
            <p>{vehicle.year}</p>
            <p>{vehicle.make}</p>
            <p>{vehicle.model}</p>
            <p>{vehicle.mileage}</p>
            <p>{vehicle.vin}</p>
        </div>
    )
}

export default VehiclePageCard
