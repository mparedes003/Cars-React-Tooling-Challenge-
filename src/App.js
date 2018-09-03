import React, { Component } from 'react'; 
import './App.css';
import CarsList from './Components/CarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carsData: [{
        "id": "one",
        "make": "Bugatti",
        "model": "Veyron",
        "color": "Khaki"
      },
      {
        "id": 2,
        "make": "Dodge",
        "model": "Ram 1500",
        "color": "Indigo"
      },
      {
        "id": 3,
        "make": "Chevrolet",
        "model": "Camaro",
        "color": "Puce"
      },
      {
        "id": 4,
        "make": "Honda",
        "model": "Odyssey",
        "color": "Violet"
      },
      {
        "id": 5,
        "make": "Infiniti",
        "model": "I",
        "color": "Mauv"
      }]
    }
  }


  render() {
    return (
      <div className="App">
      
          <h1>Car Information</h1>
          <CarsList cars={this.state.carsData} />
        

      </div>
    );
  }
}

export default App;
