import React from "react"

const Display = (props) => {
    const {vehicles} = props

    const loaded = () => (
        <div>Vehicle info goes here</div>
    )

    const loading = <h1>Loading...</h1>

    return vehicles.length > 0 ? loaded(): loading

}

export default Display