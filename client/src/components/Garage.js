import React from 'react'
import background from '../images/garage.jpeg'
import VehicleCarousel from './VehicleCarousel'



const Garage = () => {
    return (
        <div id='garage__div' style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >

            <div>
                {/* <VehicleCarousel /> */}
            </div>
            
        </div>
    )
}

export default Garage
