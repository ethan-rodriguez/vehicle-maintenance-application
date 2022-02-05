import React from 'react'

const vehicleHistoryCard = ({vehicleHistory}) => {

    return (
        <div>
            <p>{vehicleHistory.routine}</p>
            <p>{vehicleHistory.created_at}</p>
        </div>
    )
}

export default vehicleHistoryCard

