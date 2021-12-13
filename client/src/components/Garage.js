import React from 'react'
import background from '../images/garage.jpeg'
import Row from './Row'
import UpdateVehicle from './UpdateVehicle'
import AddMaintenanceRecord from './AddMaintenanceRecord'
import CreateVehicle from './CreateVehicle'


const Garage = ({vehicles, user, errors }) => {

    return (
        <div id='garage__div' style={{ 
            // backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >
            <div className='vehicle__row'>
                <Row vehicles={vehicles} user={user} />
                {/* <AddMaintenanceRecord />
                <UpdateVehicle /> */}
            </div>
                <CreateVehicle errors={errors} />
            
        </div>
    )
}

export default Garage
