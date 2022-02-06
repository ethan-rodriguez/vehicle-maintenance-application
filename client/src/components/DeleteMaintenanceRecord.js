import React from 'react'

const DeleteMaintenanceRecord = ({vehicleHistory, setHistories, histories}) => {

    const handleDeleteRecord = () => {
        console.log(vehicleHistory)
        let config = {
            method: 'DELETE'
        }
        fetch(`routines/${vehicleHistory.id}`, config)
            setHistories(histories.filter(history => history.id != vehicleHistory.id))
    }

    const handleClick = () => {
        let message = "Are you sure you want to deleted this maintenance record?  This cannot be undone and you will loose this maintenance record forever."
        if (window.confirm(message) === true){
            handleDeleteRecord()
        }
    }

    return (
        <div>
            <button onClick={() => {handleClick()}}>Delete Record</button>
        </div>
    )
}

export default DeleteMaintenanceRecord
