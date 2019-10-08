import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to='/LongWeatherForecast' className='nav-el'>
        Long Weather Forecast
      </NavLink>
    </div>
  );
};

export default Navigation;
