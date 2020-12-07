import React from "react"

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
        <form onSubmit={handleSubmit}>
            <label for='addVehicle'>Add Vehicle</label>

            <input 
            type='text' 
            name="color" 
            value={formData.color} 
            onChange={handleChange}
            />
            <input 
            type='text' 
            name="img" 
            value={formData.img} 
            onChange={handleChange}
            />
            <input 
            type='text' 
            name="make" 
            value={formData.make} 
            onChange={handleChange}
            />
            <input 
            type='text' 
            name="model" 
            value={formData.model} 
            onChange={handleChange}
            />
            <input 
            type='number' 
            name="year" 
            value={formData.year} 
            onChange={handleChange}
            />
            <input type = "submit" value={props.label} />
        </form>
    )
}

export default VehicleForm;