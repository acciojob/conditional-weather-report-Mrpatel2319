import React from "react";
import './../styles/App.css';

const App = () => {

  const weatherData = {
    temperature: 25,
    conditions: "Sunny"
  };

  
  const temperatureColor = {
    color: weatherData.temperature > 20 ? 'rgb(255, 0, 0)' : 'blue'
  };

  return (
    <div>
      <p>Temperature: <span style={temperatureColor}>{weatherData.temperature}</span></p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  );
}

export default App;
