import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap'

const UpdateVehicle = ({ vehicles, vehicle, setVehicles, selectedVehicleId }) => {

    const [state, setState] = useState({year: vehicle.year, make: vehicle.make, model: vehicle.model, milage: vehicle.mileage, vin: vehicle.vin, vehicle_notes: vehicle.vehicle_notes, image_url: vehicle.image_url})

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleUpdateVehicle = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch(`/vehicles/${selectedVehicleId}`, config)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setVehicles(vehicles.map(vehicle => vehicle.id === selectedVehicleId ? data : vehicle))
            })
    }

    return (
        <div>
            <div className='update__div'>
                <Form onSubmit={handleUpdateVehicle} >
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Year"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='year' type="number" placeholder="2014" value={state.year} />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Make"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='make' type="text" placeholder="Toyota" value={state.make}/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Model"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='model' type="text" placeholder="Camry" value={state.model}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Mileage"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='mileage' type="number" placeholder="74,000" value={state.mileage}/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="VIN"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='vin' type="text" placeholder="4Y1SL65848Z411439" value={state.vin} />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Image URL"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='image_url' type="text" placeholder="http://www.somewhere.com" value={state.image_url} />
                                </FloatingLabel>
                            </Col>
                            
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingTextarea" label="Vehicle notes" className="mb-3">
                                    <Form.Control onChange={onChange} name='vehicle_notes' as="textarea" placeholder="Vehicle notes" value={state.vehicle_notes}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        {/* <Row className="g-2">
                            <Col md>
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Upload vehicle photo</Form.Label>
                                    <Form.Control onChange={onChange} name='image_url' type="file" size="md" />
                                </Form.Group>
                            </Col>
                        </Row> */}
                        <Button variant="primary" type="submit">
                            Update Vehicle
                        </Button>
                    </Form>
            </div>
        </div>
    )
}

export default UpdateVehicle
