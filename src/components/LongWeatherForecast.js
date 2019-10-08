import React, { Component } from "react";
import DailyForecast from "./DailyForecast";

class LongWeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [],
      city: "Sofia,BG"
    };
  }

  componentDidMount() {
    const apiUrl = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
    const key = "&key=06fdb31f86284375bb5a78f9f1785a0a";
    fetch(apiUrl + this.state.city + key)
      .then(res => res.json())
      .then(data => this.setState({ weatherData: [data] }));
  }

  render() {
    const { weatherData } = this.state;

    return <DailyForecast day={weatherData} />;
  }
}

export default LongWeatherForecast;
