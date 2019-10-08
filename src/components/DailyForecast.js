import React from "react";

const DailyForecast = ({ day }) => {
  const getDate = date => {
    let getDay = date.slice(8, 10);
    let getMonth = date.slice(5, 7);

    return [getDay, "/", getMonth];
  };

  const weekDay = timestamp => {
    var a = new Date(timestamp * 1000);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = days[a.getDay()];

    return dayOfWeek;
  };

  const forecastList = day.map((aDay, i) => (
    <div key={"day " + i} className='forecast-list'>
      {aDay.data.map((el, i) => (
        <div key={"aDay " + i} className='forecast-day'>
          <span className='week-day'>{weekDay(el.ts)}</span>
          <span className='date'>{getDate(el.datetime)}</span>
          <div className='max-temp'>{el.max_temp}</div>
          <div className='min-temp'>{el.min_temp}</div>
          <img className='icon' src={require(`../assets/status-images/${el.weather.icon}.png`)} alt={el.weather.description} />
          <span className='humidity'>
            <img src={require(`../assets/status-images/water.png`)} alt='' />
            {el.rh}%
          </span>
        </div>
      ))}
    </div>
  ));
  return <div>{forecastList}</div>;
};

export default DailyForecast;
