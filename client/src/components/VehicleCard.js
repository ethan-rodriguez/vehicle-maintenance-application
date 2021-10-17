import React from 'react'
import './VehicleCard.css'

const VehicleCard = ({vehicle}) => {


    

    return (
        // <div className='vehicle__card'>
        //     <div className="card">
        //         <img src={vehicle.image_url} alt="vehicle image" style={{width: '100%'}}/>
        //         <h6>{vehicle.year}</h6>
        //         <p className="title">CEO & Founder, Example</p>
        //         <p>Harvard University</p>
        //         <a href="#"><i className="fa fa-dribbble"></i></a>
        //         <a href="#"><i className="fa fa-twitter"></i></a>
        //         <a href="#"><i className="fa fa-linkedin"></i></a>
        //         <a href="#"><i className="fa fa-facebook"></i></a>
        //         <p><button>Contact</button></p>
        //         <p><button>Contact</button></p>
        //     </div>
        // </div>
        <div className='card__div'>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <h6>{vehicle.make}</h6>
                        {/* <p>{vehicle.make}</p> */}
                        {/* <p>{vehicle.model}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard
