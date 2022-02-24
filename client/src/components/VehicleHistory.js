import React, { useEffect } from 'react'
import VehicleHistoryCard from './vehicleHistoryCard'

const VehicleHistory = ({ selectedVehicleId, histories, setHistories }) => {

    useEffect(() => {
        const fetchVehicleHistory = () => {
            fetch(`/vehicles/${selectedVehicleId[0].id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log('histories', data.routines)
                setHistories(data.routines.reverse())
            })
        }
        fetchVehicleHistory()
    }, [])

const renderVehicleHistory = () => {
    return histories.map(vehicleHistory => <VehicleHistoryCard key={vehicleHistory.id} vehicleHistory={vehicleHistory} selectedVehicleId={selectedVehicleId} setHistories={setHistories} histories={histories}/>)
}

    return (
        <div>
            {renderVehicleHistory()}
        </div>
    )
}

export default VehicleHistory
