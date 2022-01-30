import React from 'react'

const CreateMaintenanceRecord = () => {
    const handleSubmit = () => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value="Add a maintenance record"></input>
                <button value="Add Maintenance Record">Add Record</button>
            </form>
        </div>
    )
}

export default CreateMaintenanceRecord


