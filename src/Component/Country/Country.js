import React from 'react';
import './Country.css'

const Country = (props) => {
   const {area, region, name, flags,population} = props.country;

    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;