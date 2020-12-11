import React from "react"
import { Button, Form, Label, Input, Col } from 'reactstrap'

const UpgradeForm = (props) => {
//Form state
const [formData, setFormData] = React.useState(props.upgrade)

//Functions
const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(formData)
    props.history.push("/")
}

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
}
return(
    <Form onSubmit={handleSubmit}>
        <Col md={4}>
        <Label>Name of Upgrade:</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange}/></Col>
        <Col md={4}>
        <Label>Cost of Upgrade:</Label>
        <Input type="integer" name="price" value={formData.price} onChange={handleChange}/></Col>
        <Col md={4}>
        <Label>Part URL:</Label>
        <Input type="text" name="url" value={formData.url} onChange={handleChange} /></Col>
        <Col md={4}>
        <Label>Assign to Vehicle:</Label>
        <Input type='integer' name='vehicle_id' value={formData.vehicle_id} onChange={handleChange}/></Col>
        <Button>Submit</Button>
    </Form>

)}

export default UpgradeForm