import React, { useState } from 'react'
import background from '../images/garage.jpeg'
import Row from './Row'
import UpdateVehicle from './UpdateVehicle'
import AddMaintenanceRecord from './AddMaintenanceRecord'
import CreateVehicle from './CreateVehicle'
import VehiclePage from './VehiclePage'


const Garage = ({vehicles, user, errors, setSelectedVehicleId, selectedVehicleId, handleVehicles }) => {

    const [visible, setVisible] = useState(true)

    return (
        <div id='garage__div' style={{ 
            // backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >
            <div className='vehicle__row'>
                {visible === true ? <Row vehicles={vehicles} user={user} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId} /> : <VehiclePage vehicles={vehicles} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId} selectedVehicleId={selectedVehicleId} />}
                {visible === true ? <CreateVehicle errors={errors} handleVehicles={handleVehicles} /> : null}
            </div>
            
        </div>
    )
}

export default Garage
