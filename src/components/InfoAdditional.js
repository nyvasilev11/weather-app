import React from "react";

const NormalForecast = ({ dayElement }) => {
  return (
    <div className="additionalInfo">
      <div className="underline">
        Wind Speed: {dayElement.wind_spd.toFixed(2)}
      </div>
      <div className="underline">Visibility: {dayElement.vis.toFixed(2)}</div>
      <div>Maximum UV Index: {dayElement.uv.toFixed(2)}</div>
    </div>
  );
};

export default NormalForecast;
