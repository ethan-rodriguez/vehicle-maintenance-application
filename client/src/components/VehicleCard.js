import React from 'react'
import { Link } from 'react-router-dom'
import './VehicleCard.css'

const VehicleCard = ({vehicle, setVisible, setSelectedVehicleId}) => {

    const {id} = vehicle

    const handleSelectVehicle = (e) => {
        setVisible(false)
        setSelectedVehicleId(id)
    }
    

    return (
        <div>
            <div className='vehicle__card'>
                <div className="card">
                    <img src={vehicle.image_url} alt="vehicle image" style={{width: '100%'}}/>
                    <h5>{vehicle.year} {vehicle.make} {vehicle.model}</h5>
                    <p className="title">Mileage: {vehicle.mileage}</p>
                    <p>VIN: {vehicle.vin}</p>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    
                    {/* ===== setVisible is passed down from garage.js ===== */}
                        <p><button onClick={handleSelectVehicle} >Select Vehicle</button></p>
                </div>
            </div>
        </div>
        // <div className='card__div'>
        //     <div className="row">
        //         <div className="column">
        //             <div className="card">
        //                 <h6>{vehicle.make}</h6>
        //                 {/* <p>{vehicle.make}</p> */}
        //                 {/* <p>{vehicle.model}</p> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default VehicleCard
