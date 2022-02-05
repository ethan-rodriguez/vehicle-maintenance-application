import React, { useEffect } from 'react'
import VehicleHistoryCard from './vehicleHistoryCard'

const VehicleHistory = ({ selectedVehicleId }) => {

    const [histories, setHistories] = React.useState([])

    const fetchVehicleHistory = () => {
        fetch(`/vehicles/${selectedVehicleId[0].id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('histories', data.routines)
            setHistories(data.routines)
        })
    }

    useEffect(() => {
        fetchVehicleHistory()
    }, [])

const renderVehicleHistory = () => {
    return histories.map(vehicleHistory => <VehicleHistoryCard vehicleHistory={vehicleHistory}/>)
}

    return (
        <div>
            {renderVehicleHistory()}
        </div>
    )
}

export default VehicleHistory
