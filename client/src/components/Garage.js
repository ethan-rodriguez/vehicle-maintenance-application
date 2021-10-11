import React from 'react'
import background from '../images/garage.jpeg'



const Garage = () => {
    return (
        <div id='garage__div' style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >

            <p>this is garage</p>
            
        </div>
    )
}

export default Garage
