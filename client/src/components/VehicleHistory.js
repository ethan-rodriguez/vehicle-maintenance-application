import React, { useEffect } from 'react'

const VehicleHistory = ({ selectedVehicleId }) => {

    const [histories, setHistory] = React.useState([])

    const fetchVehicleHistory = () => {
        fetch(`/vehicles/${selectedVehicleId[0].id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(selectedVehicleId[0].id)
            console.log(data)
            console.log('history map', data.routines.map(history => history.routine))
            setHistory(data.routines.map(history => history.routine))
        })
    }

    useEffect(() => {
        fetchVehicleHistory()
    }, [])

const renderVehicleHistory = () => {
    return histories.map(history => <p><li>{history}</li></p>)
}

    return (
        <div>
            <h6>{renderVehicleHistory()}</h6>
        </div>
    )
}

export default VehicleHistory
