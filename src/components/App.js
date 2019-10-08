import React from "react";
import { Route } from "react-router-dom";
import LongWeatherForecast from "./LongWeatherForecast";
import Navigation from "./Navigation";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route path='/LongWeatherForecast' component={LongWeatherForecast} />
    </div>
  );
}

export default App;
