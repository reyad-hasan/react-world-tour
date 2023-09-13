import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, seVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountries = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handelVisitedFlags = flag => {
    const newVisitedFlag = [...visitedFlags, flag];
    seVisitedFlags(newVisitedFlag);
  }

  // remove item from an array in a state
  // use filter to select all the elements except the one you want to remove


  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>
      {/* display countries */}
      <div className="country-container">
        {
          countries.map(country => <Country
            key={country.cca3}
            handelVisitedCountries={handelVisitedCountries}
            handelVisitedFlags={handelVisitedFlags}
            country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;

