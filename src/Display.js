import React from "react"

const Display = (props) => {
    const {vehicles} = props

    const loaded = () => (
        <div>
            {vehicles.map((vehicle) => (
                <div>
                <article key={vehicle.id}>
                    <div>
                        <h2>{vehicle.year}</h2>
                        <h1>{vehicle.model}</h1>
                        <img src={vehicle.img}/>
                        <button onClick={() => {
                            props.deleteVehicle(vehicle)
                            }}>Delete Vehicle</button>
                        <button onClick={() => {
                            props.selectVehicle(vehicle)
                            props.history.push('/edit')
                        }}>Edit</button>
                    </div>
                </article>
                </div>
            ))}
        </div>
    )

    const loading = <h1>Loading...</h1>

    return vehicles.length > 0 ? loaded(): loading

}

export default Display