import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap'

const VehicleForm = (props) => {
    //Form state
    const [formData, setFormData] = React.useState(props.vehicle)

    //Functions
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Label for='addVehicle'>Add Vehicle</Label>
            <Row form>
                <Col md={2}>
                    <FormGroup>
                    <Label>Year:</Label>
                    <Input 
                    type='number' 
                    name="year" 
                    value={formData.year} 
                    onChange={handleChange}
                    />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                    <Label>Make:</Label>
                    <Input 
                    type='text' 
                    name="make" 
                    value={formData.make} 
                    onChange={handleChange}
                    />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                    <Label>Model:</Label>
                    <Input 
                    type='text' 
                    name="model" 
                    value={formData.model} 
                    onChange={handleChange}
                    />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={4}>
            <FormGroup>
                <Label>Color:</Label>
                <Input 
                type='text' 
                name="color" 
                value={formData.color} 
                onChange={handleChange}
                />
            </FormGroup>
            </Col>
            <Col md={8}>
                <Label>Image:</Label>
                <Input 
                type='text' 
                name="img" 
                value={formData.img} 
                onChange={handleChange}
                />
            </Col>
            </Row>
            <Label>Oil Information:</Label>
            <Row>
            <Col md={4}>
                <Label>Oil Type:</Label>
                <Input 
                type='text' 
                name="oilType" 
                value={formData.oilType} 
                onChange={handleChange}
                />
            </Col>
            <Col md={4}>
                <Label>Filter Type:</Label>
                <Input 
                type='text' 
                name="filterType" 
                value={formData.filterType} 
                onChange={handleChange}
                />
            </Col>
            <Col md={4}>
                <Label>Capacity:</Label>
                <Input type='text' name="capacity" value={formData.capacity} onChange={handleChange}/>
            </Col>
            </Row>
            <Button>Submit</Button>
        </Form>
    )
}

export default VehicleForm;