import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
  } from 'reactstrap'

const Display = (props) => {
    const {vehicles} = props

    const loaded = () => (
        <div>
            {vehicles.map((vehicle) => (
                <div style={{border: "1px solid black", display: "flex"}}>
                    <Card style={{width: "45%"}}>
                        <CardImg top width ="100%" src={vehicle.img}/>
                        <CardBody>
                            <CardTitle>{vehicle.year} {vehicle.make}</CardTitle>
                            <CardSubtitle>{vehicle.model}</CardSubtitle>
                            <Button onClick={() => {
                                props.deleteVehicle(vehicle)
                                }}>Delete Vehicle</Button>
                            <Button onClick={() => {
                                props.selectVehicle(vehicle)
                                props.history.push('/edit')
                            }}>Edit</Button>
                        </CardBody>
                    </Card>
                    <div style={{width: "25%"}}>
                    <ul style={{listStyle: "none"}}><h2>Oil Information</h2>
                        <li>Filter part#: {vehicle.filterType}</li>
                        <li>Oil type: {vehicle.oilType}</li>
                        <li>Engine Capacity: {vehicle.capacity}quarts</li>
                        <li>Drain Plug size: {vehicle.drainPlug}</li>
                    </ul>
                    </div>
                    <div style={{width: "25%"}}>
                        <ul><h2>Upgrades</h2></ul>
                    </div>
                </div>
            ))}
        </div>
    )

    const loading = <h1>Loading...</h1>

    return vehicles.length > 0 ? loaded(): loading

}

export default Display