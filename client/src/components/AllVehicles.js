import React, {useEffect} from 'react'
import AllVehiclesCard from './AllVehiclesCard'


const AllVehicles = ({ user, vehicles, setVehicles, histories, setHistories, selectedVehicleId}) => {


    const renderAllVehiclesCard = () => {
        return vehicles.map(vehicle => <AllVehiclesCard key={vehicle.id} vehicle={vehicle} histories={histories} setHistories={setHistories} selectedVehicleId={selectedVehicleId} />)
    }

    useEffect(() => {
        const fetchVehicleHistory = () => {
            fetch(`/vehicles/`)
            .then(resp => resp.json())
            .then(data => {
                console.log('histories', data)
                setHistories(data)
            })
        }
        fetchVehicleHistory()
    },[])

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            {renderAllVehiclesCard()}
        </div>
    )
}

export default AllVehicles
