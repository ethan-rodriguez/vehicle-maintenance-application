import React from 'react'



const VehiclePage = ({ setVisible, selectedVehicleId }) => {

    

    return (
        <div>
            <div className='records__div'>
                <br />
                <br />
                <br />
                <h1>This is vehicle page</h1>
                <button onClick={() => setVisible(true)} >Return to garage</button>
            </div>
        </div>
    )
}

export default VehiclePage
