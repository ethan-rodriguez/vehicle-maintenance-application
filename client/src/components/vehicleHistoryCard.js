import React from 'react'

import DeleteMaintenanceRecord from './DeleteMaintenanceRecord'

const vehicleHistoryCard = ({vehicleHistory, selectedVehicleId, setHistories}) => {

    return (
        <div>
            <p>{vehicleHistory.routine} - {vehicleHistory.created_at} <DeleteMaintenanceRecord selectedVehicleId={selectedVehicleId} vehicleHistory={vehicleHistory} setHistories={setHistories}/> </p>
        </div>
    )
}

export default vehicleHistoryCard

