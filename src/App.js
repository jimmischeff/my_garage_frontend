import './App.css';
import React from 'react'
import Display from './Display'
import VehicleForm from "./Form"
import UpgradeForm from "./UpgradeForm"
import { Route, Link, Switch } from "react-router-dom"

function App() {

  const url = "https://jsmygarageapp.herokuapp.com/"
  console.log("Current base URL is: ", url)

  //state to hold Vehicle API
  const [vehicle, setVehicle] = React.useState({
    vehicles: []
  })

  const [upgrade, setUpgrade] = React.useState({
    upgrades: []
  })

  //Function to get API data from URL
  const getVehicles = () => {
    fetch(url + "/vehicles")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setVehicle(data)
    })
  }

  const getUpgrades = () => {
    fetch(url + "/upgrades")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUpgrade(data)
    })
  }


  //useEffect to do initial call
  React.useEffect(() => {
    getVehicles()
    getUpgrades()
  }, [])

  const emptyVehicle = {
    color: "",
    year: 0,
    make: "",
    model: "",
    img: ""
  }

  const emptyUpgrade = {
    name: "",
    price: "",
    url: "",
    vehicle_id: 0
  }

  //selected state for edit route
  const [selectedVehicle, setSelectedVehicle] = React.useState(emptyVehicle)

  //function to handle creating new vehicles
  const handleCreate = (newVehicle) => {
    fetch(url + "/vehicles", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newVehicle)
    }).then(response => {
      getVehicles()
    })
  }

  //create new upgrade
  const upgradeCreate = (newUpgrade) => {
    fetch(url + "/upgrades", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUpgrade)
    }).then(response => {
      getUpgrades()
    })
  }

  //function to handle updates
  const handleUpdate = (vehicle) => {
    fetch(url + "/vehicles/" + vehicle.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(vehicle)
    }).then(response => getVehicles())
  }

  //set state when you select vehicle to update
  const selectVehcile = (vehicle) => {
    setSelectedVehicle(vehicle)
  }

  //function to handle delete
  const deleteVehicle = (vehicle) => {
    fetch(url + "/vehicles/" + vehicle.id, {
      method: "delete"
    }).then(response => getVehicles())
  }

  return (
    <div className="App">
      <h1>My Garage</h1>
      <div>
          <ul id={"nav"}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/create"><li>Add Vehicle</li></Link>
            <li>ODB Codes</li>
            <Link to='/upgrade'><li>Upgrades</li></Link>
          </ul>
        </div>
      <Switch>
        <Route exact path='/' render={ (rp) => (
          <Display vehicles = {vehicle} selectVehicle = {selectVehcile}{...rp}
          deleteVehicle = {deleteVehicle}/>
        )}/>
        <Route exact path='/create' render={(rp) => (
          <VehicleForm {...rp} label='create' vehicle={emptyVehicle} handleSubmit={handleCreate} />
        )}/>

        <Route exact path='/edit' render={(rp) => (
          <VehicleForm {...rp} label='update' vehicle={selectedVehicle} handleSubmit={handleUpdate} />
        )}/>

        <Route exact path='/upgrade' render={(rp) => (
          <UpgradeForm {...rp} upgrade={emptyUpgrade} handleSubmit={upgradeCreate} state={upgrade}/>
        )}/>
      </Switch>
        


    </div>
  );
}

export default App;
