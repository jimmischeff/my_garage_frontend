import logo from './logo.svg';
import './App.css';
import React from 'react'
import Display from './Display'

function App() {

  const url = "http://localhost:3000"
  console.log("Current base URL is: ", url)

  //state to hold Vehicle API
  const [vehicle, setVehicle] = React.useState({
    vehicles: []
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


  //useEffect to do initial call
  React.useEffect(() => {
    getVehicles()
  }, [])

  return (
    <div className="App">
      <h1>My Garage</h1>
      <Display
        vehicles = {vehicle}/>

    </div>
  );
}

export default App;
