import React, { Component } from "react";
import InfoAdditional from "./InfoAdditional";
import NormalForecast from "./NormalForecast";

class LongWeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [],
      city: "Sofia,BG",
      activeItemId: null
    };
  }

  getDate = date => {
    let getDay = date.slice(8, 10);
    let getMonth = date.slice(5, 7);

    return [getDay, "/", getMonth];
  };

  weekDay = timestamp => {
    var a = new Date(timestamp * 1000);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var dayOfWeek = days[a.getDay()];

    return dayOfWeek;
  };

  additionalInfo = id => {
    this.setState({
      activeItemId: id
    });
  };

  componentDidMount() {
    const apiUrl = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
    const key = "&key=06fdb31f86284375bb5a78f9f1785a0a";
    fetch(apiUrl + this.state.city + key)
      .then(res => res.json())
      .then(data => this.setState({ weatherData: [data] }));
  }

  render() {
    const { weatherData, activeItemId } = this.state;
    const forecastList = weatherData.map((aDay, i) => (
      <div key={"day " + i} className="forecast-list">
        {aDay.data.map((el, i) => (
          <div
            key={"aDay " + i}
            className={`forecast-day ${
              activeItemId === i ? "additionalInfo" : ""
            }`}
            onClick={() => this.additionalInfo(i)}
          >
            {activeItemId === i ? (
              <InfoAdditional dayElement={el} />
            ) : (
              <NormalForecast
                getDate={this.getDate}
                weekDay={this.weekDay}
                dayElement={el}
              />
            )}
          </div>
        ))}
      </div>
    ));
    return <div className="forecast-section">{forecastList}</div>;
  }
}

export default LongWeatherForecast;
