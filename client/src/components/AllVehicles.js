import React, {useEffect} from 'react'
import AllVehiclesCard from './AllVehiclesCard'
import vehicleHistoryCard from './vehicleHistoryCard'

const AllVehicles = ({ user, vehicles, histories, setHistories, selectedVehicleId}) => {


    const renderAllVehiclesCard = () => {
        return vehicles.map(vehicle => <AllVehiclesCard key={vehicle.id} vehicle={vehicle} histories={histories} setHistories={setHistories} selectedVehicleId={selectedVehicleId} />)
    }

    const fetchVehicleHistory = () => {
        console.log('vehicle id', selectedVehicleId)
        console.log('allvehicles histories', histories)

        // fetch(`/vehicles/${selectedVehicleId}`)
        // .then(resp => resp.json())
        // .then(data => {
        //     console.log('histories', data.routines)
        //     setHistories(data.routines)
        // })
    }

    useEffect(() => {
        fetchVehicleHistory()
    }, [])

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
