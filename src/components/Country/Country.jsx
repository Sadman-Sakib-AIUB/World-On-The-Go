import React, { useState } from "react";
import './Country.css'

const Country = ({ country }) => {
//   console.log(country.name.common);

const [visited , setVisited] = useState(false);

const handleClick = () => {
  // setVisited(true);

  // if(visited){
  //   setVisited(false)
  // }
  // else{
  //   setVisited(true)
  // }

  setVisited(visited? false: true)

  // setVisited(!visited);
}

  return (
    <div className={`country ${visited && 'country-visited'}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population} Peoples</p>
      <p>Area: {country.area.area} {
        country.area.area > 300000 ? '(Big Country)' : '(Small Country)'
      }</p>
      <button onClick={handleClick}> 
        {visited? 'Visited' : 'Not Visited'} 
      </button>
    </div>
  );
};

export default Country;
