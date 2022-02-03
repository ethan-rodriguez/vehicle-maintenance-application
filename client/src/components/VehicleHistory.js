import React from 'react'

const VehicleHistory = () => {

    const [history, setHistory] = React.useState([])

    const fetchVehicleHistory = () => {
        fetch('/vehicles')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    useEffect(() => {
        fetchVehicleHistory()
    }, [])



    return (
        <div>
            
        </div>
    )
}

export default VehicleHistory
