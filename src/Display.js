import React from "react"
import Oil from './Dropdown'
import Tire from './Tires'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, 
  } from 'reactstrap'
import UpgradeTable from "./UpgradeTable"

const Display = (props) => {
    const {vehicles} = props

    const loaded = () => (
        <div>
            {vehicles.map((vehicle) => (
                <div style={{border: ".5px solid black", display: "flex"}}>
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
                    <div style={{display: "inline-block"}}>
                        <Oil vehicles={vehicle}/>
                        <Tire vehicles={vehicle}/>
                    </div>
                    <div style={{width: "25%"}}>
                        <h2>Upgrades</h2>
                        <UpgradeTable upgrades={vehicle.upgrades}/>
                    </div>
                </div>
            ))}
        </div>
    )

    const loading = <h1>Loading...</h1>

    return vehicles.length > 0 ? loaded(): loading

}

export default Display