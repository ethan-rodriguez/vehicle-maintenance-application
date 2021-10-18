import React from 'react'
import background from '../images/garage.jpeg'
import Row from './Row'


const Garage = ({vehicles, user }) => {

    return (
        <div id='garage__div' style={{ 
            // backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >
            <div className='vehicle__row'>
                <Row vehicles={vehicles} user={user} />
            </div>
            
        </div>
    )
}

export default Garage
