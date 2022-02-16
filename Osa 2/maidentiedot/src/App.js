import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  //Hakee datan verkosta
  useEffect(() => {
    console.log('Effect is affecting')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('Promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('Render', countries.length, 'notes')


  //asdasdasd
  const countriesToShow =
  search === ""
    ? []
    : countries.filter((country) =>
        country.name.toString().toLowerCase().includes(search.toString().toLowerCase)
      );

  if (countriesToShow.length === 1) {
    return (
      <div>
        Find countries <input onChange={handleSearchChange} />
        <div>
          <CountryInfo country={countriesToShow[0]} />
        </div>
      </div>
    )
  }


  const Country = ({ country }) => {
    const [show, setShow] = useState(false);
  
    const handleButtonClick = () => setShow(!show);
  
    if (show) {
      return (
        <div>
          {country.name}{" "}
          <button onClick={handleButtonClick}>{show ? "Hide" : "Show"}</button>
          <CountryInfo country={country} />
        </div>
      );
    }
  
    return (
      <div>
        {country.name}{" "}
        <button onClick={handleButtonClick}>{show ? "Hide" : "Show"}</button>
      </div>
    )
  }
  

  const CountryInfo = ({ country }) => (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages:</h3>
      <ul>
        {country.languages.map((lang, i) => (
          <li key={i}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} width="200" alt={`${country.name} flag`} />
    </div>
  )


  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div>
      <h1>Country info</h1>
      Search: <input value={search} onChange={handleSearchChange}/>
      <div>
        {countriesToShow.length > 10
          ? "Too many matches, specify another filter"
          : countriesToShow.map((country) => (
              <div key={country.name}>
                <Country country={country} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default App;
