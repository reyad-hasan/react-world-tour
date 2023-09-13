import { useState } from 'react';
import './Country.css'
const Country = ({ country, handelVisitedCountries, handelVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'white' : 'black' }}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handelVisitedCountries(country)}>Mark visited</button>
            <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <br />
            <button onClick={handelVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;