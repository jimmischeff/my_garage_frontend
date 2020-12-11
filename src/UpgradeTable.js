import React from "react"
import { Table } from 'reactstrap'

const UpgradeTable = (props) => {
    const {upgrades} = props

    return(
    <Table borderless>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {upgrades.map((upgrade) => (
            <tr>
                <td>{upgrade.name}</td>
                <td>${upgrade.price}</td>
            </tr>
        ))}
        </tbody>
    </Table>
    )
}

export default UpgradeTable;