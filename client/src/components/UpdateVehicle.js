import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap'

const UpdateVehicle = ({ }) => {


    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {

    }

    
    return (
        <div>
            <div className='update__div'>
                <Form onSubmit={onSubmit} >
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Year"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='year' type="number" placeholder="2014" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Make"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='make' type="text" placeholder="Toyota" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Model"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='model' type="text" placeholder="Camry" />
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
                                    <Form.Control onChange={onChange} name='mileage' type="number" placeholder="74,000" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="VIN"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='vin' type="text" placeholder="4Y1SL65848Z411439" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel
                                    controlId="floatingInput"
                                    label="Image URL"
                                    className="mb-3"
                                >
                                    <Form.Control onChange={onChange} name='image_url' type="text" placeholder="http://www.somewhere.com" />
                                </FloatingLabel>
                            </Col>
                            
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingTextarea" label="Vehicle notes" className="mb-3">
                                    <Form.Control onChange={onChange} name='vehicle_notes' as="textarea" placeholder="Vehicle notes" />
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
                            Submit
                        </Button>
                    </Form>
            </div>
        </div>
    )
}

export default UpdateVehicle
