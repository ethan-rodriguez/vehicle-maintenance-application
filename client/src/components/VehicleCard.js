import React from 'react'
import './VehicleCard.css'

const VehicleCard = ({vehicle}) => {


    

    return (
        <div>
            <div className='vehicle__card'>
                <div className="card">
                    <img src='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5db8ac181a84270007892480%2F0x0.jpg' alt="vehicle image" style={{width: '100%'}}/>
                    <h5>{vehicle.year} {vehicle.make} {vehicle.model}</h5>
                    <p className="title">Mileage: {vehicle.mileage}</p>
                    <p>VIN: {vehicle.vin}</p>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    
                    <p><button>Select Vehicle</button></p>
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
