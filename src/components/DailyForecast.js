// import React from "react";
// import InfoAdditional from "./InfoAdditional";
// import NormalForecast from "./NormalForecast";

// const DailyForecast = ({
//   day,
//   getDate,
//   weekDay,
//   additionalInfo,
//   activeItemId
// }) => {
//   const forecastList = day.map((aDay, i) => (
//     <div key={"day " + i} className="forecast-list">
//       {aDay.data.map((el, i) => (
//         <div
//           key={"aDay " + i}
//           className={`forecast-day ${
//             activeItemId === i ? "additionalInfo" : ""
//           }`}
//           onClick={() => additionalInfo(i)}
//         >
//           {activeItemId === i ? (
//             <InfoAdditional aDayEl={el} />
//           ) : (
//             <NormalForecast aDayEl={el} />
//           )}
//         </div>
//       ))}
//     </div>
//   ));
//   return <div className="forecast-section">{forecastList}</div>;
// };

// export default DailyForecast;

// // <div
// //   key={"aDay " + i}
// //   className={`forecast-day ${
// //     activeItemId === i ? "additionalInfo" : ""
// //   }`}
// //   onClick={() => additionalInfo(i)}
// // >
// //   <span className="week-day">{weekDay(el.ts)}</span>
// //   <span className="date">{getDate(el.datetime)}</span>
// //   <div className="max-temp">{el.max_temp}</div>
// //   <div className="min-temp">{el.min_temp}</div>
// //   <img
// //     className="icon"
// //     src={require(`../assets/status-images/${el.weather.icon}.png`)}
// //     alt={el.weather.description}
// //   />
// //   <span className="humidity">
// //     <img src={require(`../assets/status-images/water.png`)} alt="" />
// //     {el.rh}%
// //   </span>
// // </div>;
