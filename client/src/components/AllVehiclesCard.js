import React from 'react'

const AllVehiclesCard = (props) => {
    return (
        <div>
            <p>{props.vehicle.make}</p>
            <p>{props.histories.routine}</p>
        </div>
    )
}

export default AllVehiclesCard
