import React from 'react'

import DeleteMaintenanceRecord from './DeleteMaintenanceRecord'

const vehicleHistoryCard = ({vehicleHistory, selectedVehicleId, setHistories, histories}) => {

    return (
        <div>
            <p>{vehicleHistory.routine} - {vehicleHistory.created_at} <DeleteMaintenanceRecord selectedVehicleId={selectedVehicleId} vehicleHistory={vehicleHistory} setHistories={setHistories} histories={histories}/> </p>
        </div>
    )
}

export default vehicleHistoryCard

