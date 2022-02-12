import React, { useState } from 'react'
import background from '../images/garage.jpeg'
import Row from './Row'
import UpdateVehicle from './UpdateVehicle'
import CreateVehicle from './CreateVehicle'
import VehiclePage from './VehiclePage'
import AllVehicles from './AllVehicles'
import { Switch, Route} from 'react-router-dom'


const Garage = ({vehicles, setVehicles, user, errors, setSelectedVehicleId, selectedVehicleId, handleVehicles, histories, setHistories }) => {

    const [visible, setVisible] = useState(true)

    return (
        <div id='garage__div' style={{ 
            // backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            }} >
            <div className='vehicle__row'>
                {
                visible === true ? <Row vehicles={vehicles} user={user} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId} /> : <VehiclePage vehicles={vehicles} setVehicles={setVehicles} setVisible={setVisible} setSelectedVehicleId={setSelectedVehicleId} selectedVehicleId={selectedVehicleId} setHistories={setHistories} histories={histories} />
                }
                {
                visible === true ? <CreateVehicle errors={errors} handleVehicles={handleVehicles} /> : null
                }
            </div>
            {/* <Switch>
                <Route exact path='/allvehicles'>
                    <AllVehicles selectedVehicleId={selectedVehicleId} />
                </Route>
            </Switch> */}
        </div>
    )
}

export default Garage
