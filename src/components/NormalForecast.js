import React from "react";

const NormalForecast = ({ getDate, weekDay, dayElement }) => {
  return (
    <div className="normal-forecast">
      <div className="week-day">{weekDay(dayElement.ts)}</div>
      <div className="date">{getDate(dayElement.datetime)}</div>
      <div className="max-temp underline">{dayElement.max_temp}</div>
      <div className="min-temp">{dayElement.min_temp}</div>
      <img
        className="icon"
        src={require(`../assets/status-images/${dayElement.weather.icon}.png`)}
        alt={dayElement.weather.description}
      />
      <span className="humidity">
        <img src={require(`../assets/status-images/water.png`)} alt="" />
        {dayElement.rh}%
      </span>
    </div>
  );
};

export default NormalForecast;
